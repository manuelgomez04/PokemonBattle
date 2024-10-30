import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ value + '.png';
  }

}
