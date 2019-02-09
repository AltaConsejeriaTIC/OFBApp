import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TriviaService } from '../trivia/trivia.service';

@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html'
})
export class PrimaryTabsPage {
  private triviaPages = {
    trivia: 'TriviaPage',
    survey: 'TriviaSurveyPage',
    notAvailable: 'TriviaNotAvailablePage',
    winners: 'TriviaWinnersPage',
  };
  public triviaController = 'TriviaNotAvailablePage';
  public pageParams: any = {};

  constructor(private triviaService: TriviaService) {}

  public ionViewWillEnter() {
    this.getTrivia();
  }

  public getTrivia() {
    this.triviaService.getTrivia().subscribe((data: any) => {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        this.getWinners();
      } else {
        this.pageParams = data;
        this.triviaController = this.triviaPages.trivia;
      }
    });
  }

  public getWinners() {
    this.triviaService.getWinners().subscribe((data: any) => {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        this.triviaController = this.triviaPages.notAvailable;
      } else {
        const offsetEndTriviaDate = new Date(data.date);
        offsetEndTriviaDate.setDate(offsetEndTriviaDate.getDate() + 3);
        if (new Date() > offsetEndTriviaDate) {
          this.triviaController = this.triviaPages.notAvailable;
        } else {
          this.pageParams = data;
          this.triviaController = this.triviaPages.winners;
        }
      }
    });
  }

  public reloadTrivia() {
    if (this.triviaController === this.triviaPages.notAvailable) {
      this.getTrivia();
    }
  }
}
