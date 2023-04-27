import { Component } from '@angular/core';
import { RespPasis} from '../../interfaces/paises.interfaces'
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  termino: string = '';
  hayError: boolean = false;
  region: RespPasis[] = [];

  constructor(
    private PaisService: PaisService
  ) { }

    buscar(termino:string){
      this.hayError = false
      this.PaisService.buscarRegion(termino).subscribe((region)=>{
        this.region = region
      },
      (err) =>{
        this.hayError = true
      });
      this.termino = ''
    }

    sugerencia(termino:string){
      this.hayError = false
    }
}
