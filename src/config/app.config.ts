import { ENV } from '../env';

export class AppConfig {
  public static apiTrivia = `${ENV.endpoint}/trivia`;
}
