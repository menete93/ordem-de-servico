import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OS } from 'src/app/models/Os';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent implements OnInit {


  os: OS={
    tecnico:'',
    cliente:'',
    observacoes:'',
    status:'',
    prioridade:'',
  }


  constructor(
    private route:ActivatedRoute,
    private Service:OsService,
    private router : Router,
  ){}


  ngOnInit(): void {
    
  this.os.id = this.route.snapshot.paramMap.get('id')
  this.findById();
  }

  cancel(): void {
    this.router.navigate(['os'])
  }


findById():void{
this.Service.findById(this.os.id).subscribe(res =>{

  this.os=res;
})
}







}
