// Modulos propios de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modulos creados por mi 
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTableComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTableComponent
  ]
})
export class PaisModule { }
