import { ENV } from '../env';

export class AppConfig {
  public static apiTrivia = `${ENV.endpoint.admin}/trivia`;
  public static recentEvents = `${ENV.endpoint.app}/eventos/home`;
  public static recentNews = `${ENV.endpoint.app}/blog/home`;
  public static news = `${ENV.endpoint.app}/blog`;
  public static magistralClassesHome = `${ENV.endpoint.app}/clases-magistrales/home`;
  public static magistralClasses = `${ENV.endpoint.app}/clases-magistrales`;
  public static monthlyEvents = `${ENV.endpoint.app}/eventos/mes`;
}
