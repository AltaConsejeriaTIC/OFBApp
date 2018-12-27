import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private triviaSurveyService: TriviaSurveyService, private storage: Storage) {
    this.triviaContent = navParams['data'];
  }

  public ionViewWillEnter() {
    this.getStoragedData();
  }

  private async getStoragedData() {
    const isUserDataAvilable = await this.storage.get('userData');
    console.log(isUserDataAvilable)
    if(isUserDataAvilable !== null){
      this.inputs.name = await this.storage.get('name');
      this.inputs.lastName = await this.storage.get('lastName');
      this.inputs.phone = await this.storage.get('phone');
      this.inputs.email = await this.storage.get('email');
      this.inputs.newsletterEmail = await this.storage.get('newsLetterEmail');
      this.inputs.rememberData = true;
    }
  }

  private async saveUserData() {
    await this.storage.set('userData', 'true');
    await this.storage.set('name', this.inputs.name);
    await this.storage.set('lastName', this.inputs.lastName);
    await this.storage.set('phone', this.inputs.phone);
    await this.storage.set('email', this.inputs.email);
    await this.storage.set('newsLetterEmail', this.inputs.newsletterEmail);
  }

  private async deleteUserData() {
    await this.storage.remove('userData');
    await this.storage.remove('name');
    await this.storage.remove('lastName');
    await this.storage.remove('phone');
    await this.storage.remove('email');
    await this.storage.remove('newsLetterEmail');
  }

  public uploadAnswer() {
    if (!this.validateFields()) {
      console.log("test")
      const answer = {
        name: this.inputs.name,
        lastName: this.inputs.lastName,
        email: this.inputs.email,
        cellphone: this.inputs.phone,
        contactPreference: this.inputs.newsletterEmail ? 'email' : '',
        answer: this.inputs.triviaAnswer,
      };
      if (answer.contactPreference === '') {
        delete answer.contactPreference;
      }
      if (this.inputs.rememberData){
        this.saveUserData();
      }else {
        this.deleteUserData();
      }
      this.triviaSurveyService.uploadAnswer(answer).subscribe((data) => {
        this.showSuccessAlert();
      }, (err) => {
        if (err.error.message === 'user already answered the question.') {
          this.userAlreadyRegistered();
        }
      });
    }
  }

  public validateFields() {
    if (this.inputs.triviaAnswer === '') {
      this.inputsError.triviaAnswer = true;
      this.inputError = true;
    } else {
      this.inputsError.triviaAnswer = false;
    }
    if (this.inputs.name === '') {
      this.inputsError.name = true;
      this.inputError = true;
    } else {
      this.inputsError.name = false;
    }
    if (this.inputs.lastName === '') {
      this.inputsError.lastName = true;
      this.inputError = true;
    } else {
      this.inputsError.lastName = false;
    }
    if (!this.validateEmail()) {
      this.inputsError.email = true;
      this.inputError = true;
    } else {
      this.inputsError.email = false;
    }
    if (!this.validatePhone()) {
      this.inputsError.phone = true;
      this.inputError = true;
    } else {
      this.inputsError.phone = false;
    }
    if (this.inputs.tos) {
      this.inputsError.tos = false;
    } else {
      this.inputsError.tos = true;
      this.inputError = true;
    }
    console.log(this.inputsError)
    return this.inputError;
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
      cssClass: 'trivia-alert',
      enableBackdropDismiss : false,
    }).present();
  }

  public userAlreadyRegistered() {
    this.alertCtrl.create({
      title: '¡Esta combinación de email y teléfono ya respondió la trivia.!',
      message: 'Un usuario solo puede particiar una vez por trivia.',
      buttons: [{
        text: 'OK',
      }],
      cssClass: 'trivia-alert',
      enableBackdropDismiss : false,
    }).present();
  }
}
