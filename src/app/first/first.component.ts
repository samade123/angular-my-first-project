import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
constructor(private route: ActivatedRoute) {

}

ngOnInit(): void {
  alert(this.route.snapshot.paramMap.get('id'))
}
}
