import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {EventComponent} from "./event/event.component";
import {EventsComponent} from "./events/events.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', redirectTo : '/user' , pathMatch : 'full'},
  {path: 'user' , component : HomeComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateEventComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
  {path: 'event/:id', component: EventComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'user'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
