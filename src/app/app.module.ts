import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnsenModule } from 'ngx-onsenui';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { VoteComponent } from './vote/vote.component';
import { DatabaseService } from './db/database.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OnsenModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, LoginComponent, VoteComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [DatabaseService]
})
export class AppModule { }
