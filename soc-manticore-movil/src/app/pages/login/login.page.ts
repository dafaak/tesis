import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuarioInterface} from '../../interfaces/usuario.interface';
import {IonSlides, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  userLogueado = {
    email: 'anderson@gmail.com',
    password: '1234'
  }

  registerUser: UsuarioInterface = {
    email: 'test@gmail.com',
    password: '1234',
    nombre: 'test',
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  login(fLogin: NgForm) {
    if(fLogin.invalid){
      return;
    }

    this.navController.navigateRoot('main/tabs/tab1').then();

  }

  registro(fRegistro: NgForm) {

  }

  mostrarRegistro() {
    this.slides.slideTo(1).then();
  }

  mostrarLogin() {

    this.slides.slideTo(0).then();
  }
}
