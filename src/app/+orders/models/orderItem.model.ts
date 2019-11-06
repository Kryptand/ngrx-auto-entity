import { Key } from "projects/ngrx-auto-entity/src/public_api";

export class OrderItem {
  @Key orderId: number;
  @Key productId: number;
  quantity: number;
}
