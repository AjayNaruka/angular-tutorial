import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector:'courses',
  template:`
    {{text | summary:11}}
  `
})

export  class CoursesComponent{
  text= "Lorem Ipsum is simply dummy text of the printing";

  
}