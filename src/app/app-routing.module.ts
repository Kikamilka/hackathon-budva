import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {SearchComponent} from "./search/search.component";
import {EventComponent} from "./event/event.component";
import {EventsComponent} from "./events/events.component";
import {CreateEventComponent} from "./create-event/create-event.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'create', component: CreateEventComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
