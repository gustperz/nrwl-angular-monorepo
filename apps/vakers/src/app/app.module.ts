import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { VakisUiModule } from '@vaki/vakis/ui';
import { VakisDataModule } from '@vaki/vakis/data';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { VakiDetailsComponent } from './vaki-details/vaki-details.component';

@NgModule({
  declarations: [AppComponent, VakiDetailsComponent],
  imports: [
    BrowserModule,
    VakisUiModule,
    AngularFireModule.initializeApp(environment.firebase),
    VakisDataModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
