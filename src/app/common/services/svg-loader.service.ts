import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SVGLoaderService {
  #http = inject(HttpClient);

  getSvg(url: string) {
    return this.#http.get(url, { responseType: 'text' });
  }
}
