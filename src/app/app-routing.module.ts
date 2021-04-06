import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  { path: 'news', loadChildren: ()=> import('./news/news.module').then(news=> news.NewsModule)}
  // { path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
