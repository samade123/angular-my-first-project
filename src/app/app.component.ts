import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
// export class AppComponent implements OnInit, OnDestroy {
  export class AppComponent {

  title = 'my-first-project';
  intervalSub: ReturnType<typeof setInterval>;

  // ngOnInit(): void {
  //     this.intervalSub = setInterval(()=> {
  //       console.log("Hello from ngOnInint")
  //     }, 1000)
  // }

  // ngOnDestroy(): void {
  //     if(this.intervalSub){
  //       clearInterval(this.intervalSub)
  //     }
  // }

}
