import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypesComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TypesModule { }
