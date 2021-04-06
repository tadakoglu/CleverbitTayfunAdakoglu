import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommentsService } from '../../services/comments.service';
import { PostsService } from '../../services/posts.service';
import { Comment } from '../../models/comment.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService, private commentService: CommentsService, private authService: AuthService) { }

  ngOnInit() {
  }

  get getPosts(): Post[] {
    return this.postService.getPosts();
  }

  getPostComments(postId: number) {
    return this.commentService.getPostComments(postId);
  }

  sendComment(postId) {
    let commentText = (document.getElementsByName("comment"+postId)[0] as HTMLInputElement).value
    let comment = new Comment();
    comment.postId = postId;
    comment.comment = commentText;
    comment.sender = this.authService.getCurrentUsername();
    comment.date = new Date().toISOString();
    this.commentService.addNewComment(comment);
  }

  likeThisPost(postId){
    let username = this.authService.getCurrentUsername();
    this.postService.likePost(postId, username);
  }

  getPostLikes(postId){
    return this.postService.getPostLikes(postId);
  }
}
