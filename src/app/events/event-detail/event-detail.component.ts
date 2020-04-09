import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event-list/event.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  item: Event;
  index: number;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  onAdd() {
    this.eventService.onSendRequirements(this.item.requirements);
  }
  onDelete() {
    this.eventService.deleteItem(this.index);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.item = this.eventService.getSingleEvent(this.index);
    });
    this.eventService.eventSelected.subscribe((event: Event) => {
      this.item = event;
    });
  }
  onEdit() {
    this.eventService.startEdit.next(this.index);
  }
}
