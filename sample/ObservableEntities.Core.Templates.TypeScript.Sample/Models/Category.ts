import { ObservableEntity } from 'observable-entities';
import { Product } from './Product';

export class Category extends ObservableEntity {

  categoryId: number;
  categoryName: string;
  product: Product[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
