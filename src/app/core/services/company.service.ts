import { Company } from '../../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getCompany(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.API_BASE}/company/${companyId}`);
  }

  loadCompanies() {
    return this.http.get<Company[]>(`${this.API_BASE}/company`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_BASE}/company`);
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`);
  }

  addCompany(company: Company) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };

    return this.http.post(`${this.API_BASE}/company`, company, options);
  }

  updateCompany(company: Company) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };
    return this.http.put(
      `${this.API_BASE}/company/${company.id}`,
      company,
      options
    );
  }

  errorHandler(error) {
    console.error('CUSTOM ERROR');
    return Observable.throw(error);
  }
}
