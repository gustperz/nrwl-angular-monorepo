import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VakisUiModule } from '@vaki/vakis/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VakisUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
