export class UserRegister {
  email: string = '';
  name: string = '';
  password: string = '';
}
export class User {
  id: number = 0;
  name?: string;
  username: string = 'default';
  email: string = 'test@email.com';
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone?: number;
  website?: string;
  company?: Company;
}
export class Company {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}
