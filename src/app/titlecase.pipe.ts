import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): any{
    if(!value) return null;

    let preps = ['of','the'];

    let words = value.split(' ');
    for( var index=0; index< words.length; index++){
      if(preps.includes(words[index].toLowerCase()) && index!=0 ){
        words[index] = words[index].toLowerCase();
      }else{
        words[index] = words[index].substr(0,1).toUpperCase() + words[index].substr(1).toLowerCase();
      }
    }

    return words.join(' ')
  }

}
