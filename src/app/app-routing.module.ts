import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'status', loadChildren:()=> import('./status/status.module').then(m => m.StatusModule)},
  {path: 'types', loadChildren:()=> import('./types/types.module').then(m => m.TypesModule)},
  {path: 'specialties', loadChildren:()=> import('./specialties/specialties.module').then(m => m.SpecialtiesModule)},
  {path: 'projects', loadChildren:()=> import('./projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'customers', loadChildren:()=> import('./customers/customers.module').then(m => m.CustomersModule)},
  {path: 'members', loadChildren:()=> import('./members/members.module').then(m => m.MembersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
