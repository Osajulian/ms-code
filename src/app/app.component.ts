import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'my-app',
 template: `<div><h1>{{pageTitle}}</h1>
   <ms-accounts></ms-accounts>
    </div>`
})
export class AppComponent  {
  name = 'Angular 5';
}
