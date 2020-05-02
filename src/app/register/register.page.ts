import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    nombre: [{
      type: "required",
      message: "El nombre es requerido"
    }
    ],
    apellido: [{
      type: "required",
      message: "El nombre es requerido"
    }
    ],
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
  };

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required
      ])),
      apellido: new FormControl("", Validators.compose([
        Validators.required
      ])),
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
