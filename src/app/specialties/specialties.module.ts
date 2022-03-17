import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [SpecialtiesComponent, AddComponent, ListComponent, EditComponent],
  imports: [
    CommonModule,
    SpecialtiesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecialtiesModule { }
