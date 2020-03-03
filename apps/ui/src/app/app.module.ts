import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsModule } from '@ui/ui-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
