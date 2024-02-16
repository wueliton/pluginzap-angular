import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {
  #themeService = inject(ThemeService);
  theme = this.#themeService.theme;
  themeIcon = computed(() =>
    this.theme() === 'dark' ? 'weather-moon' : 'user-interface-sun'
  );

  toggleTheme = () => this.#themeService.toggleTheme();
}
