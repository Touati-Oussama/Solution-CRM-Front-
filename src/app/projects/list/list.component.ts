import { ProjetService } from './../../services/projet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];
  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getAll().toPromise().then((res:any)=>{
      this.data = res;
    })
  }

  delete(id:number){

  }
}
