import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap , tap } from 'rxjs';
import { RespPasis, Name } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!:RespPasis[]
  constructor(

    private activateRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({ id })=> this.PaisService.busquedaPorAlphacode( id ) ),
      tap( console.log  )
    )
    .subscribe( pais => this.pais = pais )

  
    
  }

}
