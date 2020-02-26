import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { SecondDirectivesDirective } from './second-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    FirstDirectiveDirective,
    SecondDirectivesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
