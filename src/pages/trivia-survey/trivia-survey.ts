import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TriviaSurveyService } from './trivia-survey.service';

@IonicPage()
@Component({
  selector: 'page-trivia-survey',
  templateUrl: 'trivia-survey.html',
})
export class TriviaSurveyPage {
  public triviaContent = {};
  public inputs = {
    triviaAnswer: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    newsletterEmail: false,
    rememberData: false,
    tos: false,
  };
  public inputsError = {
    triviaAnswer: false,
    name: false,
    lastName: false,
    email: false,
    phone: false,
    tos: false,
  };
  public inputError = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private triviaSurveyService: TriviaSurveyService
  ) {
    this.triviaContent = navParams['data'];
  }

  public ionViewDidLeave() {
  }

  public uploadAnswer() {
    if (!this.validateFields()) {
      const answer = {
        name: this.inputs.name,
        lastName: this.inputs.lastName,
        email: this.inputs.email,
        cellphone: this.inputs.phone,
        contactPreference: this.inputs.newsletterEmail ? 'email' : '',
        answer: this.inputs.triviaAnswer,
      };
      if (answer.contactPreference === '') { delete answer.contactPreference};
      this.triviaSurveyService.uploadAnswer(answer).subscribe((data) => {
        console.log(data)
        this.showSuccessAlert();
      });
    }
  }

  public validateFields() {
    let inputError = false;
    if (this.inputs.triviaAnswer === '') {
      this.inputsError.triviaAnswer = true;
      inputError = true;
    } else {
      this.inputsError.triviaAnswer = false;
    }
    if (this.inputs.name === '') {
      this.inputsError.name = true;
      inputError = true;
    } else {
      this.inputsError.name = false;
    }
    if (this.inputs.lastName === '') {
      this.inputsError.lastName = true;
      inputError = true;
    } else {
      this.inputsError.lastName = false;
    }
    if (!this.validateEmail()) {
      this.inputsError.email = true;
      inputError = true;
    } else {
      this.inputsError.email = false;
    }
    if (!this.validatePhone()) {
      this.inputsError.phone = true;
      inputError = true;
    } else {
      this.inputsError.phone = false;
    }
    if (this.inputs.tos) {
      this.inputsError.tos = true;
      inputError = true;
    } else {
      this.inputsError.tos = false;
      inputError = false;
    }
    this.inputError = inputError;
    return inputError;
  }

  public validateEmail() {
    const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const match = emailRegex.test(this.inputs.email);
    return match;
  }

  public validatePhone() {
    const phoneRegex = /3[\d]{9}/;
    const match = phoneRegex.test(this.inputs.phone);
    return match;
  }

  public onInputChange($event) {
    const target = $event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.inputs[target.name] = value;
  }

  public showSuccessAlert() {
    this.alertCtrl.create({
      title: '¡Tu respuesta a la trivia ha sido enviada!',
      message: 'Al finalizar la trivia se publicará en esta sección de la aplicación la lista de ganadores, tu nombre puede estar ahí.',
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.navCtrl.pop();
        },
      }],
      cssClass: 'trivia-alert'
    }).present();
  }
}
