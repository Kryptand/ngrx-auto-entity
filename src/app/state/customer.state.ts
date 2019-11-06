import { buildState, IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { Customer } from 'models/customer.model';

export const { initialState, facade: CustomerFacadeBase } = buildState(Customer);

export function customerReducer(state = initialState): IEntityState<Customer> {
  return state;
}
