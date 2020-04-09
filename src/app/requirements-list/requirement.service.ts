import { Requirement } from './requirements.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class RequirementService {
  startEdit = new Subject<number>();
  eventUpdate = new EventEmitter<Requirement[]>();
  private requirements: Requirement[] = [
    new Requirement('English level', 'Intermediate'),
    new Requirement('Experience', '1+ years'),
  ];
  getRequirements() {
    return this.requirements.slice();
  }
  onAddRequirement(requiremen: Requirement) {
    this.requirements.push(requiremen);
    this.eventUpdate.emit(this.requirements.slice());
  }
  onAddRequirements(requirements: Requirement[]) {
    this.requirements.push(...requirements);
    this.eventUpdate.emit(this.requirements.slice());
  }
  getSingleRequirement(index: number) {
    return this.requirements[index];
  }
  updateRequirements(index: number, newReq: Requirement) {
    this.requirements[index] = newReq;
    this.eventUpdate.next(this.requirements.slice());
  }
  deleteItem(index: number) {
    let beforeArr = this.requirements.slice(0, index);
    let afterArr = this.requirements.slice(index + 1);
    let newArr = [...beforeArr, ...afterArr];
    this.requirements = newArr;
    this.eventUpdate.emit(this.requirements.slice());
  }
}
