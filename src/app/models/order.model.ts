import { Key }from 'projects/ngrx-auto-entity/src/public_api';

export enum OrderStatus {
  pending = 'pending',
  open = 'open',
  completed = 'completed',
  archived = 'archived'
}

export class Order {
  @Key id: number;
  accountId: number;
  customerId: number;
  dateOfOrder: string;
  status: OrderStatus;
}
