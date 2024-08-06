import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterModule, Router } from '@angular/router';
import { OS } from 'src/app/models/Os';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico..service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css'],
  standalone: true,
imports: [MatTableModule, MatPaginatorModule,MatIconModule,RouterModule],
})

export class OsClosedComponent implements AfterViewInit {



  list : OS[] = [];

  displayedColumns: string[] =
   [
    'cliente',
    'dataAbertura',
    'dataFechamento',   
    'prioridade',
    'observacoes',
    'status',
    'tecnico',
    'action'
  ];
  dataSource = new MatTableDataSource<OS>(this.list);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }



  constructor(
    private service: OsService,
    private router : Router,
    private tecservice : TecnicoService,
    private cliService:ClienteService
    ){}  
    
    
    
    findAll():void{
    this.service.findAll().subscribe((res)=>{
     res.forEach(x =>{
      if(x.status == 'ENCERRADO'){
        this.list.push(x)
      }
     });
    this.listarTecnico();
    this.listarCliente();
    
    console.log(this.list)
    this.dataSource = new MatTableDataSource<OS>(this.list);
    this.dataSource.paginator = this.paginator;
    })
    }
    
    navigateToCreate():void {
    
    this.router.navigate(['os/create'])
    }

//metodo que busca na base de dados o tecnico pelo id e faz a correspondencia com o nome do tecnico na lista do findAll
listarTecnico():void{
    this.list.forEach(x =>{
    this.tecservice.findById(x.tecnico).subscribe(res =>{
    x.tecnico = res.nome

    })
})
}


listarCliente():void{

  this.list.forEach(x =>{
    this.cliService.findById(x.cliente).subscribe(res =>{
      x.cliente = res.nome;
      })     
  })

}












}









