export class User {
  _id: string;
  username:string;
  password:string;
  contactNumber:string;
  name:string;
  gender:string;
  dateOfBirth:Date;
  nationality:string;
  languagesSpoken:string[];
  airline:string;
  base: string;
  layovers: Object[];
  reviews: Object[];
  friends: Object[];
  friendsRequests: Object[];
  profilePicture: File;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
