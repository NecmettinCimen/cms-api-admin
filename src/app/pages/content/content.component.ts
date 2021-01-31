import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TableDataResponse } from "src/app/models/tableDataResponse";
import { ContentService } from 'src/app/services/content.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  env: any = environment

  constructor(public modalService: NgbModal,
    private contentService: ContentService,
    private toastrService: ToastrService) { }

  tableData: TableDataResponse = TableDataResponse.Create();
  modelId = 0;

  ngOnInit(): void {
    this.GetTableData();
  }

  async GetTableData(skip: number = 0) {
    var tableData = await this.contentService.GetAll(skip);
    this.tableData = TableDataResponse.Create(null, tableData, skip)
  }

  async delete() {
    var result = await this.contentService.DeleteAsync(this.modelId)
    if (result) await this.GetTableData();
    this.modalService.dismissAll();
    this.toastrService.success("Deleted!");
  }
}
