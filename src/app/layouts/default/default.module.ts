import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from './../../shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { AppRoutingModule } from './../../app-routing.module';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { DefaultComponent } from "./default.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations : [
  DefaultComponent,
  DashboardComponent,
  PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class DefaultModule {}
