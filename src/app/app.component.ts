import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite : true
  }

  tweet = {
    isLiked: false,
    numberOfLikes: 15,
  }

  onFavChange(args: any){
    console.log('changed: ',args.newValue);
  }
}
