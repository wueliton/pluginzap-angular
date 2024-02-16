import { Injectable, inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { SVGLoaderService } from '../services/svg-loader.service';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  #svgLoaderService = inject(SVGLoaderService);
  #icons = new Map<string, Observable<SVGElement | null>>();

  getIcon(name: string) {
    const loadedIcon = this.#icons.get(name);
    if (loadedIcon) return loadedIcon;

    return this.#svgLoaderService.getSvg(`assets/icons/${name}.svg`).pipe(
      map((svg) => {
        const div = document.createElement('DIV');
        div.innerHTML = svg;
        return div.querySelector('svg') as SVGElement;
      }),
      tap((svgEl) => this.#icons.set(name, of(svgEl)))
    );
  }
}
