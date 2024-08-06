import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { OS } from 'src/app/models/Os';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit{
  selected = '';

  tecnico: Tecnicos[] = []
  cliente:  Cliente[] = []

  os: OS={
    tecnico:'',
    cliente:'',
    observacoes:'',
    status:'',
    prioridade:'',
  }

  constructor(
    private router: Router,
    private service: TecnicoService,
    private route:ActivatedRoute,
    private cliservice:ClienteService,
    private osService: OsService,

  ) { }
  ngOnInit(): void {
this.listarTecnico();
this.listarCliente();
  }

  create():void{

    this.osService.create(this.os).subscribe(res =>{
      this.osService.message("Ordem de servico criada com sucesso!","OK",3000);
      this.router.navigate(['os'])
console.log(this.os, "CRIAR OS")
;
    })
  }

listarTecnico():void{

  this.service.findAll().subscribe(res =>{
  this.tecnico = res;
 })
  }

  listarCliente():void{

    this.cliservice.findAll().subscribe(res =>{
      this.cliente = res;
    })
  }

  
  cancel(): void {
    this.router.navigate(['os'])
  }

}





