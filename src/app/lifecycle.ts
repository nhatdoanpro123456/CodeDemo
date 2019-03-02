import { Component } from '@angular/core';

@Component({
    selector: 'lifecycle-sample-app',
    template: `
    <h4 class="ui horizontal divider header">
      OnInit and OnDestroy
    </h4>
  
    <button class="ui primary button" (click)="toggle()">
      Toggle
    </button>
    <div *ngIf="display"></div>
    `
  })
  export class LifecycleSampleApp1 {
    display: boolean;
  
    constructor() {
      this.display = true;
    }
  
    toggle(): void {
      this.display = !this.display;
    }
  }