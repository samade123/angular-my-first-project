import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
// export class AppComponent implements OnInit, OnDestroy {
  export class AppComponent {

  showText = false;

  todaysDate = new Date();
  toggleText(): void {
    this.showText = !this.showText
  }

}
