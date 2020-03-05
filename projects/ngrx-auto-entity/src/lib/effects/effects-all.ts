import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ofEntityAction } from '../actions/action-operators';
import { EntityActionTypes } from '../actions/action-types';
import { EntityOperators } from './operators';

/**
 * Fully-featured entity effects class that provides all standard
 * effect handling for all CURDL operations.
 */
@Injectable()
export class EntityEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.Load),
    this.ops.load()
  );

  @Effect()
  loadAll$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.LoadAll),
    this.ops.loadAll()
  );

  @Effect()
  loadMany$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.LoadMany),
    this.ops.loadMany()
  );

  @Effect()
  loadPage$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.LoadPage),
    this.ops.loadPage()
  );

  @Effect()
  loadRange$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.LoadRange),
    this.ops.loadRange()
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.Create),
    this.ops.create()
  );

  @Effect()
  createMany$: Observable<Action> = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.CreateMany),
    this.ops.createMany()
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.Update),
    this.ops.update()
  );

  @Effect()
  updateMany$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.UpdateMany),
    this.ops.updateMany()
  );

  @Effect()
  replace$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.Replace),
    this.ops.replace()
  );

  @Effect()
  replaceMany$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.ReplaceMany),
    this.ops.replaceMany()
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.Delete),
    this.ops.delete()
  );

  @Effect()
  deleteMany$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.DeleteMany),
    this.ops.deleteMany()
  );

  @Effect()
  deleteByKey$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.DeleteByKey),
    this.ops.deleteByKey()
  );

  @Effect()
  deleteManyByKeys$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.DeleteManyByKeys),
    this.ops.deleteManyByKey()
  );

  @Effect()
  synchronizeDelete$ = this.actions$.pipe(
    ofEntityAction(EntityActionTypes.SynchronizeDelayDelete),
    this.ops.synchronizeDeleteDelay()
  );
  constructor(private actions$: Actions, private ops: EntityOperators) {}
}
