import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  inject
} from '@angular/core';
import { SafePipe } from '../pipes/safe.pipe';
import { SVGLoaderService } from '../services/svg-loader.service';
import { IconTypes } from './icon-list.type';
import { IconRegistryService } from './icon-registry.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [SafePipe, AsyncPipe],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  providers: [SVGLoaderService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  #icon?: IconTypes;
  #iconRegistryService = inject(IconRegistryService);
  #element = inject<ElementRef<HTMLDivElement>>(ElementRef);

  @Input({ required: true })
  set icon(name) {
    this.#icon = name;
    this.getIcon(name);
  }
  get icon() {
    return this.#icon;
  }
  @HostBinding('class')
  @Input()
  size?: 'sm' | 'lg' | 'xl';

  getIcon(name?: string) {
    if (!name) return;
    this.#iconRegistryService.getIcon(name).subscribe((icon) => {
      this.#element.nativeElement.innerHTML = icon?.outerHTML ?? '';
    });
  }
}
