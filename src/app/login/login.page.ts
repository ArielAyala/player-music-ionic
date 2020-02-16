import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    email: [{
      type: "required",
      message: "El email es requerido"
    },
    {
      type: "pattern",
      message: "No es un email válido"
    }
    ],
    password: [{
      type: "required",
      message: "El password es requerido"
    },
    {
      type: "minlength",
      message: "Mínimo 5 letras para el password"
    }]
  }

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })


  }

  ngOnInit() {
  }

}
