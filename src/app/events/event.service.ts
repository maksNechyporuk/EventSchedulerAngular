import { Event } from './event-list/event.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Requirement } from '../requirements-list/requirements.model';
import { RequirementService } from '../requirements-list/requirement.service';
import { Subject } from 'rxjs';
@Injectable()
export class EventService {
  startEdit = new Subject<number>();
  eventUpdate = new EventEmitter<Event[]>();
  eventSelected = new EventEmitter<Event>();
  constructor(private requirementService: RequirementService) {}
  private events: Event[] = [
    new Event(
      'Java Script Patterns',
      'For advanced skill students',
      'https://monsterlessons.com/api/storage/uploads/posters/9e7ad2a5-9047-4139-b25b-2ede6cec1fc8/poster.png',
      [new Requirement('Java Script', 'Java Script Druid')]
    ),
    new Event(
      'Java for true coders',
      'Java is the best programming ...',
      'https://f0.pngfuel.com/png/177/242/java-logo-plain-old-java-object-programming-language-computer-programming-object-oriented-programming-others-png-clip-art.png',

      [new Requirement('Java', 'Java Spring')]
    ),
  ];

  deleteItem(index: number) {
    this.events.splice(index, 1);
    this.eventUpdate.emit(this.events.slice());
  }
  getEvents() {
    return this.events.slice();
  }
  getSingleEvent(index: number) {
    return this.events[index];
  }
  onSendRequirements(requirements: Requirement[]) {
    console.log(requirements);
    this.requirementService.onAddRequirements(requirements);
  }
  updateEvents(index: number, newReq: Event) {
    this.events[index] = newReq;
    this.eventUpdate.next(this.events.slice());
  }
  onAddEvent(newEvent: Event) {
    this.events.push(newEvent);
    this.eventUpdate.emit(this.events.slice());
  }
}
