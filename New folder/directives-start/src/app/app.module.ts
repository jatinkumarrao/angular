import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{BasicHighlightDirective} from '../app/basic-highlight/basic-highlight.directive'

import { AppComponent } from './app.component';
import { BetterdirectiveDirective } from './betterdirective/betterdirective.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterdirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
