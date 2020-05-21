import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewaddressComponent } from './viewaddress/viewaddress.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {path: '',component: ViewaddressComponent },
  {path: 'auth',component: AddressComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
