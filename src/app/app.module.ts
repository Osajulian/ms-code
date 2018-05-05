import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccountListComponent } from './accounts/account-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OrderModule ],
  declarations: [ AppComponent, HelloComponent, AccountListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
