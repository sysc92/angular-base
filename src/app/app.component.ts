import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//indica el tag html
  templateUrl: './app.component.html',//indica el template de codigo html que conforma el componente
  //template:'<span>Fernando</span>';
  styleUrls: ['./app.component.css']//indica la hoja con los estilos del componente
})
export class AppComponent {

  titulo   :string = 'First App';


}
