import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-delete-success',
  templateUrl: './delete-success.component.html',
  styleUrls: ['./delete-success.component.css']
})
export class DeleteSuccessComponent implements OnInit {
  params:any = {
    header:'Account Deleted',
    section:{
      topText:'Account Deleted',
      buttonText:'Back to Signup',
      bottomText:'A REAL TIME AUTHENTICATION APP',
      page:'signup'
    }
  }

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  emitter(obj:any){
    (obj && obj.page)?this.commonService.navigateTo(obj.page):this.commonService.navigateTo('signin');
  }

}
