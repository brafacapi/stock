import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  lastName!: string;
  email!: string;
  password!:  string;
  roll!: string;
  
  constructor (){
    /*
    aqui va la logica de validacion de contraseñas.
  */
  }
  register(){
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.roll);
  }
}
