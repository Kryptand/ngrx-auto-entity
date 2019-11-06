import { buildState, IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { Order } from 'models/order.model';

export const { initialState, facade: OrderFacadeBase } = buildState(Order);

export function orderReducer(state = initialState): IEntityState<Order> {
  return state;
}
