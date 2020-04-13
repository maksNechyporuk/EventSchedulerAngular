import { Component, OnInit } from '@angular/core';
import { Event } from './event-list/event.model';
import { EventService } from './event.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private eventService: EventService
  ) {}
  ngOnInit(): void {
    //this.storageService.getEvents();
  }
}
