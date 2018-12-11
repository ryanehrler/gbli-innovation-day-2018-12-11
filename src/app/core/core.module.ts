import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { CompanyEffects } from './ngrx/effects/company.effects';
import { companyReducer } from './ngrx/reducers/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    StoreModule.forRoot({ companies: companyReducer }),
    EffectsModule.forRoot([CompanyEffects])
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
