import { ObservableEntity } from 'observable-entities';
import { EmployeeTerritories } from './EmployeeTerritories';

export class Employee extends ObservableEntity {

  employeeId: number;
  lastName: string;
  firstName: string;
  birthDate: Date;
  hireDate: Date;
  city: string;
  country: string;
  employeeTerritories: EmployeeTerritories[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
