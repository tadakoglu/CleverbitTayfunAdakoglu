import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService: CommentsService, private authService: AuthService,
    private postService: PostsService) { }

  ngOnInit() {
  }

  get getMyComments(): Comment[] {
    let username = this.authService.getCurrentUsername()
    return this.commentService.getUserComments(username);
  }

  getPostName(postId): string {
    return this.postService.getPostById(postId)?.title;
  }



}
