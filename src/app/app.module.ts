import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProjectsComponent} from './projects.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    PostListComponent,
    ProjectsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
