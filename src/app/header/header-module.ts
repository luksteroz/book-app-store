import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {HeaderComponent} from './header.component';
import {HeaderService} from './header.service';
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
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class HeaderModule {}

