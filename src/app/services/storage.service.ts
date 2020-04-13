import { HttpClient } from '@angular/common/http';
import { EventService } from '../events/event.service';
import { Injectable } from '@angular/core';
import { Event } from '../events/event-list/event.model';
@Injectable()
export class StorageService {
  constructor(private eventService: EventService, private http: HttpClient) {}
  private URL = 'https://event-c67f7.firebaseio.com/events.json';

  async getEvents() {
    await this.http
      .get<Event[]>(this.URL)
      .toPromise()
      .then(async (responce) => {
        console.log(responce);
        await this.eventService.onAddEvents(responce);
      });
  }
  storeEvent() {
    const events = this.eventService.getEvents();
    this.http
      .put(this.URL, events)
      .subscribe((responce) => console.log(responce));
  }
  onAddEvent(newEvent: Event) {
    this.eventService.onAddEvent(newEvent);
    this.storeEvent();
  }
  deleteItem(index: number) {
    this.eventService.deleteItem(index);
    this.storeEvent();
  }
  updateEvents(index: number, newReq: Event) {
    this.eventService.updateEvents(index, newReq);
    this.storeEvent();
  }
}
