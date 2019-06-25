import { ObservableEntity } from 'observable-entities';
import { Customer } from './Customer';

export class CustomerSetting extends ObservableEntity {

  customerId: string;
  setting: string;
  customer: Customer;

  constructor() {
    super();
    return super.proxify(this);
  }
}
