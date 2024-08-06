import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent  implements OnInit {




  id:any;
    id_tec=''
  
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
      private route:ActivatedRoute,
  
    ) { }
    ngOnInit(): void { 
      this.id_tec  = this.route.snapshot.paramMap.get('id')!
      this.findById();
    }
  
    delete():void{
    this.service.delete(this.id_tec).subscribe((res) => { 
       
    this.router.navigate(['Cliente'])
    this.service.message('Cliente Deletado com Sucesso !', 'OK', 3000)
  
  },error =>{
  
    console.log(error,"DELETE")
  
  
  
  
  })
  
    }
    findById():void{
      this.service.findById(this.id_tec).subscribe((res) =>{
      this.cliente = res;
      //this.tecnico =res;
  
  
      })
  
    }
  
    cancel(): void {
      this.router.navigate(['Cliente'])
    }
  
  
  
  }
  