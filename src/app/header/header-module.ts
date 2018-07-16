import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {HeaderComponent} from './header.component';
import {SharedService} from './shared.service';
import {AppComponent} from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class HeaderModule {}

