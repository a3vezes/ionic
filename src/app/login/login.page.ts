import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  
  resposta;
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  clicou() {
    if (this.formulario.valid && 
        this.formulario.get('email').value == "teste@teste.com" &&
            this.formulario.get('senha').value == "123456"){
              this.router.navigateByUrl('/home');
            }
    else  
      this.resposta = "Email ou senha incorreta";
       
  }

}
