import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostLike } from '../models/postLike.model';

@Injectable()
export class PostsService {

  constructor() {
    let examplePost = new Post();
    examplePost.postId = 0
    examplePost.title = "example post"
    examplePost.description = "example description"
    examplePost.sender = "tadakoglu"

    let examplePost2 = new Post();
    examplePost2.postId = 2
    examplePost2.title = "example post 2"
    examplePost2.description = "example description 2"
    examplePost2.sender = "otherUser"

    let mockPosts = [examplePost, examplePost2]
    this.posts = mockPosts;
  }


  private posts: Post[] = []

  private postLikes: PostLike[] = []

  // These will be HTTP requests in a real app
  getPosts(): Post[] {
    return this.posts
  }

  getPostById(postId): Post {
    return this.posts.find(p => p.postId == postId)
  }

  getPostLikes(postId): number {
    let postLike = this.postLikes.filter(p => p.postId == postId)?.length
    return postLike ? postLike : 0;
  }

  likePost(postId, username) {
    let pLike = this.postLikes.find(pl => pl.postId == postId && pl.likedBy == username)
    if (!pLike) { // If already liked, don't do anything
      let postLike = new PostLike();
      postLike.postId = postId;
      postLike.likedBy = username
      this.postLikes.push(postLike)
    }

  }

}
