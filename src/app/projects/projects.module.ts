import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectsComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
