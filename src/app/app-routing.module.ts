import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogHmComponent} from "./pages/blog-hm/blog-hm.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {UserGuard} from "./guards/user.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogHmComponent
  },
  {
    path: 'post/:postID',
    component: PostPageComponent,
    canActivate: [UserGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
