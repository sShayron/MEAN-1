export class User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(props = {}) {
    Object.assign(this, props);
  }
}
