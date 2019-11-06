import { buildState, IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { Account } from 'models/account.model';

export const { initialState, facade: AccountFacadeBase } = buildState(Account);

export function accountReducer(state = initialState): IEntityState<Account> {
  return state;
}
