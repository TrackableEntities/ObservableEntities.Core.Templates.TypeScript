import { ObservableEntity } from 'observable-entities';
import { Category } from './Category';
import { OrderDetail } from './OrderDetail';

export class Product extends ObservableEntity {

  productId: number;
  productName: string;
  categoryId: number;
  unitPrice: number;
  discontinued: boolean;
  rowVersion: any;
  category: Category;
  orderDetail: OrderDetail[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
