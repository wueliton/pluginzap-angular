import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute
} from '@angular/core';
import { IconTypes } from '../icon/icon-list.type';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input({ transform: booleanAttribute })
  disabled?: boolean;
  @Input()
  type?: 'submit' | 'button';
  @Input()
  icon?: IconTypes;
  @Input()
  loading?: boolean;
}
