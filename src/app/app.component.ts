import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  doble() {
    console.log("doble click");
  }

  llamarAlert() {
    alert("Dobleclick hecho")
  }
  
}