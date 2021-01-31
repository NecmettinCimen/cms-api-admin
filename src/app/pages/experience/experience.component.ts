import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  env: any = environment

  constructor(public modalService: NgbModal,
    private experienceService: ExperienceService,
    private toastrService: ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();

  model: any;

  modelInit() {
    this.model = Object.assign({}, { Id: 0, Type: null, Name: null, Description: null, Organization: null, OrganizationLink: null, StartingDate: null, DueDate: null });
  }

  ngOnInit(): void {
    this.GetTableData();
    this.modelInit();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.experienceService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  create(content: any) {
    this.modelInit()
    this.modalService.open(content)
  }

  edit(editModel: any, content: any) {
    this.model = Object.assign({}, editModel);
    this.modalService.open(content);
  }

  async save() {
    var result = !this.model.Id ? await this.experienceService.AddAsync(this.model)
      : await this.experienceService.UpdateAsync(this.model);
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Success");
  }
  async delete() {
    var result = await this.experienceService.DeleteAsync(this.model.Id)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }

}
