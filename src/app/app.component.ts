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
  }
  escribirModelo(){
    console.log(this.twoWayData);
  }
  escribir(evento){
    console.log(evento.value);
  }
  colorearFondo(evento){
    evento.srcElement.style.background = "red";
    evento.srcElement.style.width = "15rem"
  }
  ingresar(evento){
    if(evento.key == "Enter")
      alert("Enter")
  }
  mouseEntrado(evento){
    evento.srcElement.style.fontSize="20rem"
  }
  mouseLeave(evento){
    evento.srcElement.style.fontSize="1rem";
  }
}