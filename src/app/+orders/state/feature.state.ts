import { IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { createFeatureSelector } from '@ngrx/store';
import { OrderItem } from '../models/orderItem.model';

export const ordersFeatureState = createFeatureSelector<IFeatureState>('orders');

export interface IFeatureState {
  orderItem: IEntityState<OrderItem>;
}

export type FeatureState = IFeatureState;
