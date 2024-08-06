import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent  implements OnInit {

  id_tec=''

  cliete: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''

  }



  nome = new FormControl('', [Validators.minLength(4)])
  cpf = new FormControl('', [Validators.maxLength(11)])
  telefone = new FormControl('', [Validators.maxLength(9)])
 // tecnicos: Tecnicos[] = [];

  constructor(
    private router: Router,
    private service: ClienteService,
    private route:ActivatedRoute,

  ) { }
  ngOnInit(): void { 
    this.id_tec  = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void{
this.service.update(this.cliete).subscribe((res) => { 
  this.router.navigate(['Cliente'])
  this.service.message('Cliente Actualizado com Sucesso !', 'OK', 3000)
})

  }

  findById():void{
    this.service.findById(this.id_tec).subscribe((res) =>{
    this.cliete = res;
    //this.tecnico =res;


    })

  }

  cancel(): void {
    this.router.navigate(['Cliente'])
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
























  


