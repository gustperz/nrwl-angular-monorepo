import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VakiDetailsComponent } from './vaki-details/vaki-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/vaki', pathMatch: 'full' },
  { path: 'vaki', component: VakiDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
