import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[//los componentes usados dentro de este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//los componentes que publicos fuera de este modulo
        ListadoComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule//necesitamos importarlo para usar las directivas de angular.
    ]
})
export class HeroesModule{

}