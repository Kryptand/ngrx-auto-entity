/**
 * Clears all entities for this model from state
 */
import { EntityIdentity } from '../types/entity-identity';
import { EntityActionTypes } from './action-types';
import { EntityAction } from './entity-action';

export class Clear<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, correlationId?: string) {
    super(type, EntityActionTypes.Clear, correlationId);
  }
}

export class SynchronizeDelayDelete<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entities: TModel[]) {
    super(type, EntityActionTypes.SynchronizeDelayDelete);
  }
}

export class SynchronizeDelayDeleteSuccess<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entities: TModel[]) {
    super(type, EntityActionTypes.SynchronizeDelayDeleteSuccess);
  }
}

export class SynchronizeDelayDeleteFailure<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public error: any) {
    super(type, EntityActionTypes.SynchronizeDelayDeleteFailure);
  }
}

/**
 * Selects many entities in the store by the entity keys
 */
export class SelectManyByKeys<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entitiesKeys: EntityIdentity[], correlationId?: string) {
    super(type, EntityActionTypes.SelectManyByKeys, correlationId);

    if (!Array.isArray(entitiesKeys)) {
      throw new Error('[NGRX-AE] ! SelectManyByKeys action requires an array of entity keys.');
    }
  }
}

/**
 * Selects a single entity for deletion in the store by the entity model
 */
export class SelectDeleteDelay<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entity: TModel) {
    super(type, EntityActionTypes.SelectDeleteDelay);

    if (entity == null) {
      throw new Error('[NGRX-AE] ! SelectByKey requires an entity.');
    }
  }
}
/**
 * Selects a single entity for deletion in the store by key in the entity model
 */
export class DeselectDeleteDelayByKey<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entityKey: EntityIdentity) {
    super(type, EntityActionTypes.DeselectDeleteDelayByKey);

    if (entityKey == null) {
      throw new Error('[NGRX-AE] ! SelectByKey requires an entity key.');
    }
  }
}

/**
 * Selects a single entity for deletion in the store by the entity model
 */
export class DeselectDeleteDelay<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entity: TModel) {
    super(type, EntityActionTypes.DeselectDeleteDelay);

    if (entity == null) {
      throw new Error('[NGRX-AE] ! SelectByKey requires an entity.');
    }
  }
}
export class DeselectAllDeleteDelay<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel) {
    super(type, EntityActionTypes.DeselectAllDeleteDelay);
  }
}
/**
 * Selects a single entity for deletion in the store by key in the entity model
 */
export class SelectDeleteDelayByKey<TModel> extends EntityAction<TModel> {
  constructor(type: new () => TModel, public entityKey: EntityIdentity) {
    super(type, EntityActionTypes.SelectDeleteDelayByKey);

    if (entityKey == null) {
      throw new Error('[NGRX-AE] ! SelectByKey requires an entity key.');
    }
  }
}
