import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  texto: string = "Mundo";

  inicio: string = "";

  constructor(public navCtrl: NavController) {

  }

  changeName() {
    this.texto = this.inicio;
  }

}
