import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EventScheduler';
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.getEvents();
  }
}
