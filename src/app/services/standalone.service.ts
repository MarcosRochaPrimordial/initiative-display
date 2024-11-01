import { Platform } from '@angular/cdk/platform';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class StandaloneService {

  private platform = inject(Platform);
  private snackBar = inject(MatSnackBar);

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
    ) || !window.matchMedia('(display-mode: standalone)').matches;
  }

  async addToHomeScreen() {
    if (this.checkIfIos() || this.checkIfOpera() || !this.deferredPrompt) {
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

  private checkIfIos() {
    if (this.platform.IOS) {
      this.snackBar.open('IOS requires the user to add application to their home screen by hitting "share" then "Add to Home screen".', '', {
        duration: 3000,
      });
      return true;
    }

    return false;
  }

  private checkIfOpera() {
    if (/OPR/.test(window.navigator.userAgent)) {
      this.snackBar.open('Opera does not support PWA, please use another browser.', '', {
        duration: 3000,
      });
      return true;
    }

    return false;
  }
}
