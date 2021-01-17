import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  env:any=environment

  constructor(public modalService: NgbModal,
    private skillService: SkillService,
    private toastrService: ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();

  model: any = { Id: 0, Name: null, Description: null, Icon: null }
  icon: File = null;

  ngOnInit(): void {
    this.GetTableData();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.skillService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  handleFileInput(files: FileList) {
    this.icon = files.item(0);
}

  edit(editModel: any, content: any) {
    this.model = Object.assign({}, editModel);
    this.modalService.open(content);
  }

  async save() {
    var result = !this.model.Id ? await this.skillService.AddAsync(this.model, this.icon)
      : await this.skillService.UpdateAsync(this.model, this.icon);
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Success");
  }
  async delete() {
    var result = await this.skillService.DeleteAsync(this.model.Id)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }

}
