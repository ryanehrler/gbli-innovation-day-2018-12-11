import * as companyActions from '../../../core/ngrx/actions/company.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/models';
import { CompanyService } from 'src/app/core/services/company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;
  isNewCompany: boolean;
  companyId: any;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.buildForm();
    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  getCompany() {
    this.companyService
      .getCompany(this.companyId)
      .subscribe(company => this.companyForm.patchValue(company));
    // this.store.dispatch(new companyActions.SelectCompanyAction(this.companyId));
    // this.store.select(fromRoot.getSelectedCompany)
    //   .do(console.log)
    //   .filter(company => company != null)
    //   .subscribe(company => this.companyForm.patchValue(company));
  }

  buildForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      phone: ['']
    });
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService
        .addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate([`/company/list`]));
    } else {
      // this.companyForm.value['id'] = this.companyId;
      const companyToUpdate = { ...this.companyForm.value, id: this.companyId };
      this.companyService
        .updateCompany(companyToUpdate)
        .subscribe(() => this.router.navigate([`/company/list`]));
    }
  }
}
