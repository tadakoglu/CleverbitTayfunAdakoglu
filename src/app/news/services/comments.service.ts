
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentsService {

constructor() {
    let exampleComment = new Comment();
    exampleComment.postId = 0
    exampleComment.commentId = 1
    exampleComment.date = new Date().toISOString();
    exampleComment.comment = "Example comment 1 "
    exampleComment.sender = "tadakoglu"

    let exampleComment2 = new Comment();
    exampleComment2.postId = 0
    exampleComment2.commentId = 1
    exampleComment2.date = new Date().toISOString();
    exampleComment2.comment = "Example comment 2 "
    exampleComment2.sender = "otherUser"

    let mockComments = [exampleComment, exampleComment2]
    this.comments = mockComments;
 }

  private comments:Comment[] = []

  // These will be HTTP requests in a real app
  getAllComments() : Comment[]{ 
    return this.comments
  }
  getPostComments(postId:number){
    return this.comments.filter( comment => comment.postId == postId)
  }
  getUserComments(username:string){
    return this.comments.filter( comment => comment.sender == username )
  }


  addNewComment(comment:Comment){
    //Get new id
    let values = this.comments.map( c=> c.commentId);
    let maxId = Math.max(...values);
    let newId = ++maxId;
    //Set new id
    comment.commentId = newId;
    //Push the new comment to front-end database
    this.comments.push(comment);
  }
}
