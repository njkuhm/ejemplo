import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crud } from '../../model/crud.model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  actividad = { id: null, titulo: null, descripcion: null, prioridad: null, estado: null, fechaTermino: null }
  id:any;
  editar = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public crud: Crud, public alertCtrl: AlertController) {
    this.id = this.navParams.get('id');
    this.actividad = this.crud.getActividad(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  public editarEstado(){
    if (this.actividad.estado == 'do'){
    this.actividad.estado = 'doing';    
    } else {
      this.actividad.estado = 'done';
    }
    
    this.crud.editActividad(this.actividad);
    this.navCtrl.pop();
  }

  public editarActividad(){
    this.crud.editActividad(this.actividad);
    this.editar = false; 
  }

  public borrarActividad(){
    this.crud.deleteLenguaje(this.actividad);
    this.navCtrl.pop();
  }

  public estasSeguro() {
    let confirm = this.alertCtrl.create({
      title: 'Alerta!!',
      message: '¿Esta seguro de que desea cambiar el estado de su actividad?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí,Estoy seguro',
          handler: () => {
            this.editarEstado();
          }
        }
      ]
    });
    confirm.present();
  }

  public estasSeguroBorrar() {
    let confirm = this.alertCtrl.create({
      title: 'Alerta!!',
      message: '¿Esta seguro de que desea ELIMINAR la actividad?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí,Estoy seguro',
          handler: () => {
            this.borrarActividad();
          }
        }
      ]
    });
    confirm.present();
  }

  public enableEditar(){
    this.editar = true;
  }

}
