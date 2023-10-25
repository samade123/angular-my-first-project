import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { LogService } from './log.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComponent,
    ParentComponent,
    AppSizerComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
