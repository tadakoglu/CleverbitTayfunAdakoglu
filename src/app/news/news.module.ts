import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { NewsRoutingModule } from './news-routing.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { NewsComponent } from './components/news/news.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';
import { AuthModule } from '../auth/auth.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [NewsComponent, PostsComponent, CommentsComponent,StatisticsComponent],
  imports: [
    CommonModule, NewsRoutingModule, RouterModule, AuthModule
  ],
  providers: [PostsService, CommentsService,DataService]
})
export class NewsModule { }
