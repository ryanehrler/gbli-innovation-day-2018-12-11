import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyEffects } from './core/ngrx/effects/company.effects';
import { companyReducer } from './core/ngrx/reducers/company.reducer';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
