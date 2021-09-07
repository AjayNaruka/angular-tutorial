import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() totalLikes=5;

  @Input() isLiked: boolean = false;

  onClick(){
    this.isLiked =!this.isLiked;
    (this.isLiked) ? this.totalLikes++ : this.totalLikes--
  }
}
