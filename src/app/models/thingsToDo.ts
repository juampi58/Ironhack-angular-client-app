export class ThingsToDo {
  _id: String;
  establishment:string;
  city: string;
  category: string;
  reviews: Object[]


  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
