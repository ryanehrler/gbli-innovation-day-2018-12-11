import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { companyReducer } from '../../core/ngrx/reducers/company.reducer';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyTableComponent } from './company-table/company-table.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AngularMaterialModule,
    SharedModule,
    StoreModule.forFeature('company', { companies: companyReducer })
  ]
})
export class CompanyModule {}
