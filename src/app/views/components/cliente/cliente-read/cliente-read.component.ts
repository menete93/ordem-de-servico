import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,RouterModule],
})
export class ClienteReadComponent implements AfterViewInit {

  cliente : Cliente[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'telefone','action'];
  dataSource = new MatTableDataSource<Cliente>(this.cliente);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

constructor(
private service: ClienteService,
private router : Router
){}  



findAll():void{
this.service.findAll().subscribe((response)=>{

this.cliente = response;

console.log(this.cliente)
this.dataSource = new MatTableDataSource<Cliente>(this.cliente);
this.dataSource.paginator = this.paginator;
})
}

navigateToCreate():void {

this.router.navigate(['Cliente/create'])
}



}

  