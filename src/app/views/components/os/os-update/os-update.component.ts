import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { OS } from 'src/app/models/Os';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent  implements OnInit{
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
    this.os.id = this.route.snapshot.paramMap.get('id')
    this.findById();
    this.listarTecnico();
    this.listarCliente();
  }

  findById():void{
    this.osService.findById(this.os.id).subscribe(res =>{
    this.os = res
    this.converdata();

    })
  }

  update():void{

    this.osService.update(this.os).subscribe(res =>{
      this.osService.message("Ordem de servico Actualizada com sucesso!","OK",3000);
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

  converdata():void{
    if(this.os.status="ABERTO"){
      this.os.status=0
    }else if (this.os.status = "ANDAMENTO"){
      this.os.status=1
    }if(this.os.status="ENCERRADO"){
      this.os.status=2
  }

  if(this.os.prioridade="BAIXA"){
    this.os.prioridade=0
  }else if (this.os.prioridade = "MEDIA"){
    this.os.prioridade=1
  }if(this.os.prioridade="ALTA"){
    this.os.prioridade=2
}
}

















}


