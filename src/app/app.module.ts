import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbletronDemonstrationComponent } from './components/jumbletron-demonstration/jumbletron-demonstration.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbletronDemonstrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
