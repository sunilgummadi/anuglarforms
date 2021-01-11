import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegScuccessComponent } from './reg-scuccess/reg-scuccess.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  {
    path:'template',
   component:TemplatedrivenComponent
  },
  {
    path:'success',
    component:RegScuccessComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
