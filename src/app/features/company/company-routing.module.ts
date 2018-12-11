import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: CompanyListComponent },
  { path: 'edit/:id', component: CompanyEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
