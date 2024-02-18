import { Component, OnInit, OnDestroy, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { Pet } from './pet/pet.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent {

  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Goldie', this.species[0])

  submitted = false
  onSubmit() {
    this.submitted = true;
  }

  name =  new FormControl('');

  updateName() {
    this.name.setValue('nancy');
  }


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  onSubmitTwo() {
    console.log(this.profileForm)
  }
}
