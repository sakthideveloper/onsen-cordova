import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnsenModule } from 'ngx-onsenui';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { AudiosComponent } from './audios/audios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VideosComponent,
    AudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [
    LoginComponent,
    DashboardComponent,
    VideosComponent,
    AudiosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
