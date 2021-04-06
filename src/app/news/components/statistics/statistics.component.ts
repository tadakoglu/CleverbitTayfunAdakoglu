import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { DataService } from '../../services/data.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  constructor(private postService: PostsService, private commentService: CommentsService,
     private authService: AuthService, private dataServie: DataService) { }
  ngOnDestroy(): void {
    //destroy subs in here
  }

  subs: Subscription[] = []

  ngOnInit() { 
    let thisUser = this.authService.getCurrentUsername();
    this.subs.push(this.dataServie.newDataAvailable.subscribe( user=>{
        if(user != thisUser) // Signaled by other user
        {
          window.location.reload();
        }
    }))    
  }

  getNumberOfPostLikes():number{
    let username = this.authService.getCurrentUsername();
    return this.postService.getNumberOfPostLikesByUsername(username);
  }
  getNumberOfComments(){
    let username = this.authService.getCurrentUsername();
    return this.commentService.getNumberOfCommentsSentByUsername(username);
  }


  reloadPostsAndComments(){
    
  }
}
