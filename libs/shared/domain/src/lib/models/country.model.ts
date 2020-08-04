import { Region } from './region.model';

export interface Country {
  _id: string;
  iso2Code: string;
  name: string;
  region: Region;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
