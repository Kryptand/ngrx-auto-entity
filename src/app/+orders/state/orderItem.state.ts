import { buildFeatureState, IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { OrderItem } from '../models/orderItem.model';
import { ordersFeatureState } from './feature.state';

export const { initialState, facade: OrderItemFacadeBase } = buildFeatureState(OrderItem, 'orders', ordersFeatureState);

export function orderItemReducer(state = initialState): IEntityState<OrderItem> {
  return state;
}
