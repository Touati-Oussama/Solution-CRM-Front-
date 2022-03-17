import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [StatusComponent, AddComponent, ListComponent, EditComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatusModule { }
