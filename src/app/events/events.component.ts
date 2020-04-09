import { Component, OnInit } from '@angular/core';
import { Event } from './event-list/event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private eventService: EventService) {}
  ngOnInit(): void {}
}
