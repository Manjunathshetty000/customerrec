import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
  
})
export class CustomerdetailsComponent implements OnInit ,OnChanges {
  @Input() value:any
  val:any
  mergeData:any

  constructor(private customer:ServicesService) { }


  ngOnChanges(changes: SimpleChanges): void {
      console.log("detailes",this.value);

      this.val=this.customer.detailes
      let index=this.val.map((item:{id:any})=>{
        return item.id
      }).indexOf(this.value.id)
    // }).indexof(this.value.id)

      console.log(index);
      console.log(this.val[index]);

      this.mergeData={...this.value,...this.val[index]}
      console.log(this.mergeData);
      
      
      
      
  }
  ngOnInit(): void {
    // this.customerdata=this.customer
    // console.log(this.value);
    
  }

}
  