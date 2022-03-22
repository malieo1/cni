import { TablesComponent } from './modules/tables/tables.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path : '',
  component : DefaultComponent,
  children : [{
    path : '',
    component: DashboardComponent
  },{

     path: 'posts',
     component :PostsComponent,
 
  },{

    path: 'tables',
    component: TablesComponent,

 }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
