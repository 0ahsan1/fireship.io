import { Injectable, ApplicationRef } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const defaults = { title: 'Hey!', text: '', icon: '🔔', className: '', dismissed: false };

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  current;
  missingSeconds;

  constructor(private app: ApplicationRef) { }

  setNotification(data) {
    this.current = { ...defaults, ...data };
    this.app.tick();

    // 10 sec wait before dismiss
    timer(10000).subscribe(() => this.dismiss());
  }

  dismiss() {
    this.current.dismissed = true;
    this.app.tick();
  }


}
