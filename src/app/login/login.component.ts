import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonComponent } from '../common/button/button.component';
import { InputComponent } from '../common/forms/input/input.component';
import { IconComponent } from '../common/icon/icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    IconComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl<string>('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });
  message() {
    console.log('message');
  }
}
