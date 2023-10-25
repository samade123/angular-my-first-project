import { Component, OnInit, OnDestroy, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent implements OnInit{

  constructor(private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) {}
  title = 'my-first-project';

  ngOnInit(): void {
      this.logService.logMessage('Hello');
      this.renderer.setStyle(this.host.nativeElement, 'color', 'red')
  }

}
