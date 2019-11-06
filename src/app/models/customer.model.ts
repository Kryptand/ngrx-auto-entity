import { Key }from 'projects/ngrx-auto-entity/src/public_api';

export class Customer {
  @Key id: number;
  name: string;
  catchPhrase: string;
  isActive: boolean;
}
