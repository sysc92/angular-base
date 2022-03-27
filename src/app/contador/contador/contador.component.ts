import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    /*template:`
        <button (click)="aumentarValor()">+</button>
        <!-- One To Binding-->
        <span>{{counter}}</span>
        <button (click)="decrementarValor()">-</button>
    `,*/
    templateUrl:'./contador.component.html',

})
export class ContadorComponent{

    counter  :number = 0;

    increment:number = 5;
  
  
    aumentarValor(){
      this.counter+=1;
    }
  
    decrementarValor(){
      if(this.counter>0){
        this.counter-=1;
      }
      
    }
  
    acumular(valor:number){
      this.counter+=valor;
    }
}