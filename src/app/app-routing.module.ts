import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { CartComponent } from './components/public/cart/cart.component';
import { CheckoutComponent } from './components/public/checkout/checkout.component';
import { ItemDetailComponent } from './components/public/item-detail/item-detail.component';
import { ItemsComponent } from './components/public/items/items.component';
import { LoginComponent } from './components/public/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard],
    children: [
      {path: 'users', component: AdminUsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
