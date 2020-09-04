import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nagp-BiAnnual-angular';

  links={
    home: ["/home"],
    products: ["/products"],
    cart: ["/cart"]
  }
}
