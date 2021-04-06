import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { NewsComponent } from './components/news/news.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
    {
        path: '', component: NewsComponent, children: [
            { path: '', redirectTo: 'posts', pathMatch: 'full' },
            { path: 'posts', component: PostsComponent },
            { path: 'comments', component: CommentsComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
