import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { table } from 'console';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor(public modalService: NgbModal,
    private parametersService: ParametersService,
    private toastrService:ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();

  model: any = { Id: 0, Code: null, Value: null }

  ngOnInit(): void {
    this.GetTableData();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.parametersService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  edit(editModel: any, content: any) {
    this.model = Object.assign({}, editModel);
    this.modalService.open(content);
  }

  async save() {
    var result = !this.model.Id ? await this.parametersService.AddAsync(this.model)
      : await this.parametersService.UpdateAsync(this.model);
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Success");
  }
  async delete() {
    var result = await this.parametersService.DeleteAsync(this.model.Id)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }

}
