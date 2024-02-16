import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './common/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'application';
}
