import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  document = inject(DOCUMENT);
  #theme = signal<'light' | 'dark'>('light');
  theme = this.#theme.asReadonly();
  constructor() {
    effect(() => {
      const theme = this.#theme();
      this.document.body.classList[theme === 'dark' ? 'add' : 'remove']('dark');
    });
  }

  setTheme = (theme: 'light' | 'dark') => this.#theme.set(theme);

  toggleTheme = () =>
    this.#theme.update((prev) => (prev === 'light' ? 'dark' : 'light'));
}
