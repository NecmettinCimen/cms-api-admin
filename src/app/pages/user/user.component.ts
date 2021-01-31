import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  env: any = environment

  constructor(public modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();

  model: any;

  modelInit() {
    this.model = Object.assign({}, { Id: 0, Name: null, SurName: null, Email: null, Password: null, Password2: null });
  }

  ngOnInit(): void {
    this.GetTableData();
    this.modelInit();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.userService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  create(content: any) {
    this.modelInit()
    this.modalService.open(content)
  }

  edit(editModel: any, content: any) {
    this.model = Object.assign({}, editModel);
    this.model.Password2 =this.model.Password;

    this.modalService.open(content);
  }

  async save() {
    if (this.model.Password != this.model.Password2)
      return

    var result = !this.model.Id ? await this.userService.AddAsync(this.model)
      : await this.userService.UpdateAsync(this.model);
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Success");
  }
  async delete() {
    var result = await this.userService.DeleteAsync(this.model.Id)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }

}
