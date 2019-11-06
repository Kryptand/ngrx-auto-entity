import { Key }from 'projects/ngrx-auto-entity/src/public_api';

export class Product {
  @Key id: number;
  name: string;
  price: string;
  color: string;
  details: string;
  dateAdded: string;
}
