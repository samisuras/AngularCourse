import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'first-app';
  inputTexto:String = "Samy";
  twoWayData:String = "";

  doble() {
    console.log("doble click");
  }

  llamarAlert() {
    alert("Dobleclick hecho");
    console.log(this.twoWayData);
  }
  
}