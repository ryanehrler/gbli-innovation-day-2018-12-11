import { Company } from '../../../models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent {
  @Input() companies: Company[];
  @Output() deleteCompany = new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'email', 'phone', 'options'];
}
