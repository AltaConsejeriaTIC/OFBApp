import { ENV } from '../env';

export class AppConfig {
  public static notificationToken = `${ENV.endpoint.app}/token`;
  public static recentEvents = `${ENV.endpoint.app}/eventos/home`;
  public static recentNews = `${ENV.endpoint.app}/blog/home`;
  public static news = `${ENV.endpoint.app}/blog`;
  public static magistralClassesHome = `${ENV.endpoint.app}/clases-magistrales/home`;
  public static magistralClasses = `${ENV.endpoint.app}/clases-magistrales`;
  public static monthlyEvents = `${ENV.endpoint.app}/eventos/mes`;
  public static audios = `${ENV.endpoint.app}/get-audios`;
  public static videos = `${ENV.endpoint.app}/get-videos`;
  public static trivia = `${ENV.endpoint.app}/trivia/question`;
  public static uploadAnswer = `${ENV.endpoint.app}/trivia/upload-answer`;
  public static getWinners = `${ENV.endpoint.app}/trivia/get-winners`;
}
