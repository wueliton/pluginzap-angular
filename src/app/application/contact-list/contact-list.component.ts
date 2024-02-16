import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../../common/icon/icon.component';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [IconComponent, PageHeaderComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactListComponent {}
