import {
  MatButtonModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [MatButtonModule, MatToolbarModule, MatTableModule]
})
export class AngularMaterialModule {}
