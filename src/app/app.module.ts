import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import './domains';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AutofocusDirective } from './directives/autofocus.directive';

import { reducer } from './reducer';

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
