import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { LayoverRosterComponent } from './components/layover-roster/layover-roster.component';
import { LayoverNewComponent } from './components/layover-new/layover-new.component';
import { LayoverMatchesComponent } from './components/layover-matches/layover-matches.component';
import { ProfileShowComponent } from './components/profile-show/profile-show.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { LayoverCardComponent } from './components/layover-card/layover-card.component';
import { CityThingsToDoListComponent } from './components/city-things-to-do-list/city-things-to-do-list.component';
import { CityThingsToDoFilterComponent } from './components/city-things-to-do-filter/city-things-to-do-filter.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageLayoversComponent } from './pages/page-layovers/page-layovers.component';
import { PageCitiesComponent } from './pages/page-cities/page-cities.component';
import { PagePlaygroundComponent } from './pages/page-playground/page-playground.component';

import { AuthService } from './services/auth.service';
import { LayoverService } from './services/layover.service';
import { ProfileService } from './services/profile.service';
import { ThingsToDoService } from './services/thingsToDo.service';

const routes: Routes = [
  { path: '', redirectTo: '1/layovers', pathMatch: 'full' },
  { path: 'login', component: PageAuthComponent },
  { path: 'signup', component: PageAuthComponent },
  { path: 'users/:id', component: PageProfileComponent },
  { path: 'users/:id/edit', component: ProfileEditComponent },
  { path: 'users/:id/layovers', component: PageLayoversComponent },
  { path: 'layovers/:id', component: LayoverMatchesComponent },
  { path: 'cities', component: PageCitiesComponent },
  { path: 'playground', component: PagePlaygroundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    AuthLogoutComponent,
    AuthUserComponent,
    LayoverRosterComponent,
    LayoverNewComponent,
    LayoverMatchesComponent,
    ProfileShowComponent,
    ProfileEditComponent,
    LayoverCardComponent,
    PageAuthComponent,
    PageProfileComponent,
    PageLayoversComponent,
    PageCitiesComponent,
    PagePlaygroundComponent,
    CityThingsToDoListComponent,
    CityThingsToDoFilterComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,

  ],
  providers: [AuthService, LayoverService, ProfileService, ThingsToDoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
