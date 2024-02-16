import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {}
