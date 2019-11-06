import { buildState, IEntityState }from 'projects/ngrx-auto-entity/src/public_api';
import { Product } from 'models/product.model';

export const { initialState, facade: ProductFacadeBase } = buildState(Product);

export function productReducer(state = initialState): IEntityState<Product> {
  return state;
}
