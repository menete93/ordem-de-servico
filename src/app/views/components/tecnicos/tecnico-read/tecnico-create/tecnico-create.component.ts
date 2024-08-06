import { TecnicoService } from './../../../../../services/tecnico..service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnicos } from '../../../../../../app/models/Tecnicos';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {

  tecnico: Tecnicos = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''

  }

  nome = new FormControl('', [Validators.minLength(4)])
  cpf = new FormControl('', [Validators.maxLength(11)])
  telefone = new FormControl('', [Validators.maxLength(9)])

  constructor(
    private router: Router,
    private service: TecnicoService,

  ) { }

  cancel(): void {
    this.router.navigate(['Tecnico'])
  }

  criar() {
    this.service.create(this.tecnico).subscribe((res) => {
      console.log(res, "OQUE VAI SAIR")
      this.router.navigate(['Tecnico'])
      this.service.message('Tecnico criado com sucesso !', 'OK', 4000)
    }, err => {

      if (err.error.message.match('CPF ja cadastrado na Base de dados')) {
        this.service.message(err.error.message, 'OK', 4000)
      }
      console.log(err.error.message);
    })
  }


  errorValidName() {
    if (this.nome.invalid) {
      return 'o nome deve ter entre 4 a 100 caracteres !'
    }
    return false;
  }

  errorValidCpf() {
    if (this.cpf.invalid) {
      return 'o Cpf deve ter 11 caracteres !'
    }
    return false;
  }

  errorValidTelefone() {
    if (this.telefone.invalid) {
      return 'o telefone deve ter 9 digitos !'
    }
    return false;
  }

}

