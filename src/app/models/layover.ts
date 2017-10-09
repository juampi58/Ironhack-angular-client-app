export class Layover {
  _id: string;
  station: string;
  arrival: string;
  departure: string;
  creator_id: string;
  city: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }

}
