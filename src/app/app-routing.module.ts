import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', component: EventStartComponent },
      {
        path: ':id',
        component: EventDetailComponent,
      },
    ],
  },
  { path: 'edit/:id', component: EventEditComponent },
  { path: 'requirements', component: RequirementsListComponent },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
