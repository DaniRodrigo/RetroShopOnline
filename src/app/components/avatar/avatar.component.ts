import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <img
      class="avatar"
      [ngClass]="avatarClass"
      [src]="userInfo.image"
      [ngStyle]="avatarStyle"
    >
  `,
  styles: [
    `.avatar { height: 50px; width: 50px; padding: 5px}`,
    `.admin { border-radius: 100%; }`,
    `.sales { border-radius: 18%; }`,
  ]
})
export class AvatarComponent {
  @Input() userInfo: any;

  get avatarClass(): string {
    return this.userInfo.role === 'ADMIN' ? 'admin' : this.userInfo.role === 'SALES' ? 'sales' : '';
  }

  get avatarStyle(): any {
    return {
      'border': this.userInfo.role === 'ADMIN' ? '2px solid cyan' : '2px solid yellow'
    };
  }
}

