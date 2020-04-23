import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: 'vote', component: VoteComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/vote', pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }