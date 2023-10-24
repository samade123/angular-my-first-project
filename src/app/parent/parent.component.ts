import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
// import [ChildComponent]
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @ViewChild(ChildComponent) child: { message: string; };

  constructor() {}
  ngOnInit(): void {}

  // ngAfterViewInit() {
  //   alert(this.child.message);
  // }

  recieveMessage(msg: string) {
    alert(msg);
  }
}
