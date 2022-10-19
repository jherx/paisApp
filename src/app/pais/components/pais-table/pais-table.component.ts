import { Component, Input, OnInit } from '@angular/core';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  @Input() pais:RespPasis[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
