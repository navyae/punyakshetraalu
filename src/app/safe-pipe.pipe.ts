import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {
  constructor(private domSanitize: DomSanitizer) {}

  transform(url): any {
    console.log(url);
    return this.domSanitize.bypassSecurityTrustUrl(url);
  }

}
