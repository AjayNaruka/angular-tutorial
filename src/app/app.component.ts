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

  courses = [5];

  /* SWITCH */

  viewMode ='map';

  /* / SWITCH */

  /* NGFOR */

  courses2 = [
    {
      id:1,
      name:'c1'
    },
    {
      id:2,
      name:'c2'
    },
    {
      id:3,
      name:'c3'
    },
  ]

  /* / NGFOR */
}
