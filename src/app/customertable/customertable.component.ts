import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
   styleUrls: ['./customertable.component.css'],
  // template:`<h1 style="font-weight: bold; text-align: center; background-color:rgb(199, 195, 170);" *ngIf="true">Selected Customer</h1>
  // <table class="table" [hide]="hide" *ngIf="hide">
  //     <thead class="thead-dark">
  //       <tr>
  //         <th scope="col">CompanyName</th>
  //         <th scope="col">Company Description</th>
  //         <th scope="col">Company start year</th>
  //         <th scope="col">Company gst no</th>
  //         <th scope="col">Branches</th>
  //         <th scope="col">Technolgies</th>
  //         <th scope="col">State</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>{{mergeData?.companyName}}</td>
  //         <td>{{mergeData?.companydec}}</td>
  //         <td>{{mergeData?.companystartYear}}</td>
  //         <td>{{mergeData?.gst}}</td>
  //         <td>{{mergeData?.Branches}}</td>
  //         <td>{{mergeData?.Technologies}}</td>
  //         <td>{{mergeData?.state}}</td>
  //       </tr>
  //     </tbody>
  //   </table>`
})
export class CustomertableComponent implements OnInit {
  result
  item:boolean=false
  selectItem:any
  display:boolean=false
  hide:boolean=false
  constructor(private user:ServicesService) { }

  ngOnInit(): void {
    this.result=this.user.table
    
  }

  submit(data){
    // console.log(data);
    this.selectItem=data
    this.item=true
    this.display=!this.display
// this.hide=true
// console.log(this.hide);

    
    
  }
}
