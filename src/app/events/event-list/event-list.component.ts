import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventService } from '../event.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events: Event[];
  constructor(
    private eventService: EventService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    // this.storageService.getEvents();
    this.events = this.eventService.getEvents();
    this.eventService.eventUpdate.subscribe((events: Event[]) => {
      this.events = events;
      console.log(this.events);
    });
  }
}
