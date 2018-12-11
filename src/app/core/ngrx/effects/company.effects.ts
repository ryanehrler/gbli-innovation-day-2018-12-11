import * as companyActions from '../actions/company.actions';
import { Actions, Effect } from '@ngrx/effects';
import { CompanyService } from '../../services/company.service';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CompanyEffects {
  constructor(
    private companyService: CompanyService,
    private actions$: Actions
  ) {}

  @Effect() loadCompanies$ = this.actions$
    .ofType(companyActions.LOAD_COMPANIES)
    .pipe(
      switchMap(() => this.companyService.loadCompanies()),
      map(companies => new companyActions.LoadCompaniesSuccessAction(companies))
    );
}
