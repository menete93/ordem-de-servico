import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {




id:any;
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

  constructor(
    private router: Router,
    private service: TecnicoService,
    private route:ActivatedRoute,

  ) { }
  ngOnInit(): void { 
    this.id_tec  = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete():void{
  this.service.delete(this.id_tec).subscribe((res) => { 
     
  this.router.navigate(['Tecnico'])
  this.service.message('Tecnico Deletado com Sucesso !', 'OK', 3000)

},error =>{

  console.log(error,"DELETE")




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



}
