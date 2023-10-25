import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent {
  title = 'my-first-project';
  fontSizepx = 16;
  firstExample = '';

  items = [{ name: 'hey' }, { name: 'hey' }, { name: 'hey' }];

  familyMember = {name: "John"}

  callPhone(phone: string) {
    console.log(phone);
  }
}
