import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['Spider','Iron','HUlk','Thor','Capitan'];
  heroeBorrado:string="";
  //heroeBorrado:string|undefined="";

  constructor() { 
    console.log('const');
  }

  ngOnInit(): void {
    console.log('init');
  }

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift() as string;//eliminar el primer elemento y lo regresa
    //this.heroeBorrado=this.heroes.shift() || '';
    //this.heroes.slice(1,1);
  }

}
