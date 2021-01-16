import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public modalService: NgbModal,
    private projectsService: ProjectsService,
    private toastrService: ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();

  model: any = { Id: 0, Type: "nothavetype", Name: null, Description: null, Date: null, Link: null }

  ngOnInit(): void {
    this.GetTableData();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.projectsService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  edit(editModel: any, content: any) {
    this.model = Object.assign({}, editModel);
    this.modalService.open(content);
  }

  async save() {
    var result = !this.model.Id ? await this.projectsService.AddAsync(this.model)
      : await this.projectsService.UpdateAsync(this.model);
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Success");
  }
  async delete() {
    var result = await this.projectsService.DeleteAsync(this.model.Id)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }

}
