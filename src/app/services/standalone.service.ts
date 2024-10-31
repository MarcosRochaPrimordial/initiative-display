import { Platform } from '@angular/cdk/platform';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandaloneService {

  private _platform = inject(Platform);

  private deferredPrompt: any;

  constructor() {
    this.resize();
    this.beforePromptEvent();
  }

  resize() {
    if (!this.canInstall()) {
      window.resizeTo(390, 800);
    }
  }

  canInstall() {
    return !(
      'standalone' in (window as any).navigator &&
      (window as any).navigator.standalone
    ) && !this._platform.IOS;
  }

  async addToHomeScreen() {
    if (!this.deferredPrompt) {
      return;
    }

    this.deferredPrompt.prompt();

    const { outcome } = await this.deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      this.deferredPrompt = null;
    }
  }

  private beforePromptEvent() {
    window.addEventListener('beforeinstallprompt', event => {
      this.deferredPrompt = event;
    });
  }
}
