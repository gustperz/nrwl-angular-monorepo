import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { VakisUiModule } from '@vaki/vakis/ui';
import { VakisDataModule } from '@vaki/vakis/data';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { VakiDetailsComponent } from './vaki-details/vaki-details.component';
import { RewardsShoppingCartModule } from '@vaki/rewards-shopping-cart';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, VakiDetailsComponent, ShoppingCartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VakisUiModule,
    AngularFireModule.initializeApp(environment.firebase),
    VakisDataModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RewardsShoppingCartModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [RewardsShoppingCartModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
