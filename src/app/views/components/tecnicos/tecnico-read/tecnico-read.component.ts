import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnicos } from 'src/app/models/Tecnicos';
import { TecnicoService } from 'src/app/services/tecnico..service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,RouterModule],
})
export class TecnicoReadComponent implements AfterViewInit {

  tecnico : Tecnicos[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'telefone','action'];
  dataSource = new MatTableDataSource<Tecnicos>(this.tecnico);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

constructor(
private service: TecnicoService,
private router : Router
){}  



findAll():void{
this.service.findAll().subscribe((response)=>{

this.tecnico = response;

console.log(this.tecnico)
this.dataSource = new MatTableDataSource<Tecnicos>(this.tecnico);
this.dataSource.paginator = this.paginator;
})
}

navigateToCreate():void {

this.router.navigate(['Tecnico/create'])
}
}

  