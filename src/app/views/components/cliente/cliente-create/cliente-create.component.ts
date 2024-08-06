import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {



cliente: Cliente = {
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
  private service: ClienteService,

) { }

cancel(): void {
  this.router.navigate(['Cliente'])
}

criar() {
  this.service.create(this.cliente).subscribe((res) => {
    console.log(res, "OQUE VAI SAIR")
    this.router.navigate(['Cliente'])
    this.service.message('Cliente criado com sucesso !', 'OK', 4000)
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
