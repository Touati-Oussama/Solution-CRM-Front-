import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.customersService.listStaffs().toPromise().then((res:any[])=>{
      console.log(res);
      this.data = res;
    })
  }

  delete(id:number){

  }
}
