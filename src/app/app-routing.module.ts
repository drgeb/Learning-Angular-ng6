import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationsComponent } from "./applications/applications.component";
import { DetailsComponent } from "./details/details.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  {
    path: "",
    component: ApplicationsComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
