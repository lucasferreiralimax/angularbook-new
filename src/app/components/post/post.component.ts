import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { PostService } from '@services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postModal: boolean = false;
  postContent: boolean = false;
  root = (<any>window).document.body;
  @Input() user: any;
  @Output() updateFeed = new EventEmitter<any>();

  constructor(private postService:PostService) { }

  ngOnInit(): void { }

  getFeed() {
    this.updateFeed.next();
  }

  handlePostModal(type: boolean): void {
    this.postModal = type;
    if(type) {
      this.root.querySelector('#post-content').focus()
      this.root.style.overflow = 'hidden'
    } else {
      this.root.removeAttribute('style')
    }
  }

  handlePostContent(event: any): void {
    if(event.target.value) {
      event.target.style.height = "1px";
      event.target.style.height = (+event.target.scrollHeight)+"px";
      this.postContent = true;
    } else {
      event.target.removeAttribute('style')
      this.postContent = false;
    }
  }

  onSubmitPost() {
    let commentText = this.root.querySelector('#post-content').value;

    if(commentText) {
      if(this.user) {
        let { id } = this.user,
        postData = {
          iduser: id,
          data: new Date(),
          comment: commentText
        };

        this.postService.setPost(postData).subscribe(
          res => {
            this.getFeed();
            this.root.querySelector('#post-content').value = "";
            this.handlePostModal(false);
          },
          err => {
            console.log("Error occured");
            this.postService.setPostMock(commentText)
            this.root.querySelector('#post-content').value = "";
            this.getFeed()
            this.handlePostModal(false);
          }
        )
      }
    }
  }

}
