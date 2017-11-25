import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Crud} from '../../model/crud.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  actividades = [];
  constructor(public navCtrl: NavController, public crud : Crud) {
    this.actividades = this.crud.getActividades();
  }

  goToPageCrear(){
    this.navCtrl.push('CrearPage');
  }

  goToPageDetalle(id){
    this.navCtrl.push('DetallePage', {id:id});
  }

  goToPageLogin(){
    this.navCtrl.push('LoginPage')
  }

}
