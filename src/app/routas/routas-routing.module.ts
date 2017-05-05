import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { CardComponent } from "app/card/card.component";

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'card', component : CardComponent},
  //{path:'',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutasRoutingModule { }