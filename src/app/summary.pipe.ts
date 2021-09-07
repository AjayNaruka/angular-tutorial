import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'summary' // name of the pipe
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number){
    if(!value) return null;
    let actualLimit = (limit) ? limit : 50;
    return value.substr(0,actualLimit) + '...';
  }
}