import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  /* template:`
    <p> {{authors.length}} Authors </p>
    <ul>
      <li *ngFor="let aut of authors">{{aut}}</li>
    </ul> 
  `, */
  template:`
  <div (click) = "onClick()" >
  <button (click)="onSave($event)">SAVE</button>
  </div>
  `,
  /* templateUrl :"./authors.component.html", */
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent{


  onSave(event: any){
    event.stopPropagation();
    console.log('SAVED', event);
  }
  onClick(){
    console.log('test');
    
  }

}
