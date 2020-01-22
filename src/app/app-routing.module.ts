import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';
import { ShopListComponent } from './shop-list/shop-list.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'shop-list',
    component: ShopListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
