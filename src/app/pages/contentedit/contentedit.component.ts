import { ContentService } from 'src/app/services/content.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as ts from 'typescript';

@Component({
  selector: 'app-contentedit',
  templateUrl: './contentedit.component.html',
  styleUrls: ['./contentedit.component.css']
})
export class ContenteditComponent implements OnInit {

  model: any;

  constructor(private contentService: ContentService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.modelInit()
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.model.Id = params.Id;
        this.get(params.id)
      }
    );
  }
  modelInit() {
    this.model = Object.assign({}, { Id: 0, Title: null, Description: null, Date: new Date(), Category: null, Status: null });
  }

  async get(id:string){
    var result = await this.contentService.GetAll(0,id)
    console.log(result)
    this.model = result.data[0]
  }

  async save() {
    var result;
    if (!this.model.Id) {
      this.model.Status = 0;
      result = await this.contentService.AddAsync(this.model)
    }
    else {
      result = await this.contentService.UpdateAsync(this.model)
    }
    if (result) this.model = result;
    this.toastrService.success("Success");
  }
}
