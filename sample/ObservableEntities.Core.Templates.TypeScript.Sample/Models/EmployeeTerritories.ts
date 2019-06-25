import { ObservableEntity } from 'observable-entities';
import { Employee } from './Employee';
import { Territory } from './Territory';

export class EmployeeTerritories extends ObservableEntity {

  employeeId: number;
  territoryId: string;
  employee: Employee;
  territory: Territory;

  constructor() {
    super();
    return super.proxify(this);
  }
}
