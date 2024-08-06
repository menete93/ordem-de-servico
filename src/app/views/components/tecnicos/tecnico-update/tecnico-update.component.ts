import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  id_tec=''

  tecnico: Tecnicos = {
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
    private service: TecnicoService,
    private route:ActivatedRoute,

  ) { }
  ngOnInit(): void { 
    this.id_tec  = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void{
this.service.update(this.tecnico).subscribe((res) => { 
  this.router.navigate(['Tecnico'])
  this.service.message('Tecnico Actualizado com Sucesso !', 'OK', 3000)
})

  }

  findById():void{
    this.service.findById(this.id_tec).subscribe((res) =>{
    this.tecnico = res;
    //this.tecnico =res;


    })

  }

  cancel(): void {
    this.router.navigate(['Tecnico'])
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
























  


