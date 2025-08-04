import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle'
})
export class SliceTitlePipe implements PipeTransform {

  transform(value:string ,count:number=1): unknown {
    return value.split(' ', count).join(' ');
  }

}
