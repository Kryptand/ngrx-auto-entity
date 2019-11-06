import { Key }from 'projects/ngrx-auto-entity/src/public_api';

export class Account {
  @Key id: number;
  customer_id: number;
  accountNumber: number;
  name: string;
  amount: number;
}
