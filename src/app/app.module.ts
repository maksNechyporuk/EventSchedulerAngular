import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { RequirementsEditComponent } from './requirements-list/requirements-edit/requirements-edit.component';
import { EventService } from './events/event.service';
import { RequirementService } from './requirements-list/requirement.service';
import { StorageService } from './services/storage.service';
import { EventStartComponent } from './events/event-start/event-start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    RequirementsListComponent,
    RequirementsEditComponent,
    EventStartComponent,
    NotFoundComponent,
    EventEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EventService, RequirementService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
