import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
  inject,
  signal
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors
} from '@angular/forms';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent<ValueType = unknown>
  implements ControlValueAccessor
{
  #value: ValueType = '' as ValueType;
  #onChange?: (_: unknown) => unknown;
  #onTouched?: () => unknown;
  #showPassword = signal(false);
  ngControl = inject(NgControl, { optional: true, self: true });
  @Input()
  type?: 'text' | 'number' | 'password';
  @Input()
  label?: string;
  @Input()
  name?: string;
  @Input()
  placeholder?: string;
  @Input({ transform: booleanAttribute })
  readonly?: boolean;
  @Input({ transform: booleanAttribute })
  disabled?: boolean;
  @Input({ transform: booleanAttribute })
  required?: boolean;
  @Input()
  hint?: string;
  @Input()
  set value(value: ValueType) {
    this.#value = value;
    this.#onChange?.(value);
    this.#onTouched?.();
  }
  get value(): ValueType {
    return this.#value;
  }
  showPassword = this.#showPassword.asReadonly();

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  toggleShowPassword() {
    this.#showPassword.update((prev) => !prev);
  }

  getErrorMessages = (errors?: ValidationErrors | null) => {
    if (!errors) return;
    if ('required' in errors) return 'Obrigatório';
    if ('email' in errors) return 'E-mail inválido';
    return;
  };

  onValueChange = (el?: EventTarget | null) => {
    this.value = (el as HTMLInputElement).value as ValueType;
  };

  writeValue(value: ValueType): void {
    this.value = value;
  }
  registerOnChange(fn: (_: unknown) => unknown): void {
    this.#onChange = fn;
  }
  registerOnTouched(fn: () => unknown): void {
    this.#onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (!!isDisabled === !!this.disabled) return;

    this.disabled = !!isDisabled;
  }
}
