import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crud } from '../../model/crud.model';

/**
 * Generated class for the CrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {
  actividad = { id: null, titulo: null, descripcion: null, prioridad: null, estado:null, fechaTermino: null }
  constructor(public navCtrl: NavController, public navParams: NavParams, public crud: Crud) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  public addActividad() {
    this.actividad.id = Date.now();
    this.crud.createActividad(this.actividad);
    this.navCtrl.pop();
  }

}
