import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IconComponent, RouterModule, IconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {}
