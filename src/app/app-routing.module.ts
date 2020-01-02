import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

const routes: Routes = [
  {path : '' , component: HotelSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
