import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trivia-survey',
  templateUrl: 'trivia-survey.html',
})
export class TriviaSurveyPage {
	private inputs = {
		triviaAnswer: '',
		name: '',
		email: '',
		phone: '',
		newsletterPhone: '',
		newsletterEmail: '',
		tos: '',
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
  }

  public ionViewDidLeave() {
  }

  public uploadAnswer() {
  	console.log("lalal")
  }

  public validateFields() {

  }

  public onInputChange($event) {
  	this.inputs[$event.target.name] = $event.target.value;
  	console.log(this.inputs)

  }
}
