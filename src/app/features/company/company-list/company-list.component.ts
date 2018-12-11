import * as companyActions from '../../../core/ngrx/actions/company.actions';
import { AppState, Company } from '../../../models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/models/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) {
    this.companies$ = this.store.select(
      (state: State) => state.companies.companies
    );
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompaniesAction(companyId));
  }
}
