export class Users {
  username: string;
  numero: number;
  email: string;
  password: string;
  role: string;

  constructor(username: string, numero: number, email: string, password: string) {
    this.username = username;
    this.numero = numero;
    this.email = email;
    this.password = password;
  }
}
