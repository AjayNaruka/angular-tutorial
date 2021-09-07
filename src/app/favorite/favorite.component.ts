import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('isSelected') isFavorite:boolean = false;
  @Output() change = new EventEmitter();

  addFav(event: any){
    console.log('change');
    (event.target.className == 'bi bi-star') ? event.target.className = 'bi bi-star-fill' : event.target.className = 'bi bi-star'  
  }

  onClick(){ // better solution to save the state and change it dynamically
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

}
