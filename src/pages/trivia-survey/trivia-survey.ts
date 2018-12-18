import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TriviaPage } from '../trivia/trivia';

@IonicPage()
@Component({
  selector: 'page-trivia-survey',
  templateUrl: 'trivia-survey.html',
})
export class TriviaSurveyPage {
  private triviaContent = {};
	private inputs = {
		triviaAnswer: '',
		name: '',
    lastName: '',
		email: '',
		phone: '',
		newsletterPhone: false,
		newsletterEmail: false,
    rememberData: false,
		tos: false,
	}
  private inputsError = {
    triviaAnswer: false,
    name: false,
    lastName: false,
    email: false,
    phone: false,
    tos: false,
  }
  private inputError = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.triviaContent = navParams['data'];
  }

  public ionViewDidLeave() {
  }

  public uploadAnswer() {
  	if(!this.validateFields()){
      this.showSuccessAlert();
    }
  }

  public validateFields() {
    let inputError = false;
    if(this.inputs.triviaAnswer === '') {
      this.inputsError.triviaAnswer = true;
      let inputError = true;
    } else {
      this.inputsError.triviaAnswer = false;
    }
    if(this.inputs.name === '') {
      this.inputsError.name = true;
      let inputError = true;
    } else {
      this.inputsError.name = false;
    }
    if(this.inputs.lastName === '') {
      this.inputsError.lastName = true;
      let inputError = true;
    } else {
      this.inputsError.lastName = false;
    }
    if(!this.validateEmail()) {
      this.inputsError.email = true;
      let inputError = true;
    } else {
      this.inputsError.email = false;
    }
    if(!this.validatePhone()) {
      this.inputsError.phone = true;
      let inputError = true;
    } else {
      this.inputsError.phone = false;
    }
    if(this.inputs.tos === '') {
      this.inputsError.tos = true;
      let inputError = true;
    } else {
      this.inputsError.tos = false;
    }
    this.inputError = inputError;
    return inputError;
  }

  public validateEmail() {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const match = emailRegex.test(this.inputs.email);
    return match;
  }

  public validatePhone() {
    const phoneRegex = /3[\d]{9}/
    const match = phoneRegex.test(this.inputs.phone);
    return match;
  }

  public onInputChange($event) {
    const target = $event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.inputs[target.name] = value;
    console.log(this.inputs)
  }

  public showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '¡Tu respuesta a la trivia ha sido enviada!',
      message: 'Al finalizar la trivia se publicará en esta sección de la aplicación la lista de ganadores, tu nombre puede estar ahí.',
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.navCtrl.pop();
        },
      }],
      cssClass: 'trivia-alert'
    });
    alert.present();
  }
}
