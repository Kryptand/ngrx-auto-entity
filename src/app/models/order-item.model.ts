import { Key } from "projects/ngrx-auto-entity/src/public_api";

export class OrderItem {
  @Key id: string;
  orderId: number;
  productId: number;
  quantity: number;
}
