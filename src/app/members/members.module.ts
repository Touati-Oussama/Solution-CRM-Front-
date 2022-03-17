import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [MembersComponent, AddComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class MembersModule { }
