import { Pipe, inject, type PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  #sanitizer = inject(DomSanitizer);

  transform(value: string, type: string) {
    switch (type) {
      case 'html':
        return this.#sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.#sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.#sanitizer.bypassSecurityTrustScript(value);
      case 'resourceUrl':
        return this.#sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified ${type}`);
    }
  }
}
