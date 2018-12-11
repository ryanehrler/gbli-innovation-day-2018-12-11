import * as companyActions from '../../../core/ngrx/actions/company.actions';
import { AppState } from '../../../models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    // this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }
}
