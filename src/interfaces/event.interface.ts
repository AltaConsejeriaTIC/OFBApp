export interface Event {
  date: Date | string;
  startHour: string;
  entry: string;
  title: string;
  content: string;
  image: string;
  place: Place;
  label: string;
  link: string;
  isFree?: boolean;
}

export interface Place {
  latitude: string;
  longitude: string;
  name: string;
}
