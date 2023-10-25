import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.scss'],
})
export class AppSizerComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
