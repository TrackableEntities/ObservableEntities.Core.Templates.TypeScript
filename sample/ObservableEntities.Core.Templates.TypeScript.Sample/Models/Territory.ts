import { ObservableEntity } from 'observable-entities';
import { EmployeeTerritories } from './EmployeeTerritories';

export class Territory extends ObservableEntity {

  territoryId: string;
  territoryDescription: string;
  employeeTerritories: EmployeeTerritories[];

  constructor() {
    super();
    return super.proxify(this);
  }
}
