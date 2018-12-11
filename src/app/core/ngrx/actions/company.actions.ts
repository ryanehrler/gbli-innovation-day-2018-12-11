import { Company } from '../../../models';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANIES = 'DELETE_COMPANIES';
export const DELETE_COMPANIES_SUCCESS = 'DELETE_COMPANIES_SUCCESS';

export class LoadCompaniesAction {
  readonly type = LOAD_COMPANIES;
  constructor() {}
}

export class LoadCompaniesSuccessAction {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) {}
}

export class DeleteCompaniesAction {
  readonly type = DELETE_COMPANIES;
  constructor(public payload: number) {}
}
export class DeleteCompaniesSuccessAction {
  readonly type = DELETE_COMPANIES_SUCCESS;
  constructor(public payload: number) {}
}

export type Action =
  | LoadCompaniesAction
  | LoadCompaniesSuccessAction
  | DeleteCompaniesAction
  | DeleteCompaniesSuccessAction;
