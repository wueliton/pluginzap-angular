import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent {}
