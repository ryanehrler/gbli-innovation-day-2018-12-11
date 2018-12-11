import * as companyActions from '../actions/company.actions';
import { Company, State } from '../../../models';

const initialState: State = {
  companies: []
};

export function companyReducer(
  state = initialState,
  action: companyActions.Action
): State {
  switch (action.type) {
    case companyActions.LOAD_COMPANIES_SUCCESS: {
      return (state = {
        companies: action.payload
      });
    }
    case companyActions.DELETE_COMPANIES_SUCCESS: {
      return (state = {
        companies: state.companies.filter(
          company => company.id !== action.payload
        )
      });
    }
    default: {
      return state;
    }
  }
}
