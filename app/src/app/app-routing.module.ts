import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { ViewPostComponent } from './container/posts/view-post/view-post.component';
import { NewPostComponent } from './container/posts/new-post/new-post.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post/:id/view', component: ViewPostComponent},
  {path: 'post/new', component: NewPostComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
