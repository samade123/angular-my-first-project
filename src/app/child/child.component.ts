import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  message = 'Message from child';
  sendMessage() {
    console.log("@sending Messafe")
    this.messageEvent.emit('Hello from child');
  }

  constructor() {}
  ngOnInit(): void {}
}
