import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { RespPasis } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlApi: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  // se centraliza con un metodo que se le van agregando las urls y va cahando errores
  getContriesReq(url: string): Observable<RespPasis[]> {
    return this.http.get<RespPasis[]>(url).pipe(
      catchError(() => of([])),
      delay(2000)
      );
  }

  busquedaPorAlphacode(code: string): Observable<RespPasis[]> {
    const url = `${this.urlApi}/alpha/${code}`;
    return this.http.get<RespPasis[]>(url).pipe(
      catchError((error) => {
        console.log(error);

        return of([]);
      })
    );
  }

  buscarPais(termino: string): Observable<RespPasis[]> {
    const url = `${this.urlApi}/name/${termino}`;
    return this.getContriesReq(url);
  }

  buscarCapital(termino: string): Observable<RespPasis[]> {
    const url = `${this.urlApi}/capital/${termino}`;
    return this.getContriesReq(url);
  }

  buscarRegion(termino: string): Observable<RespPasis[]> {
    const url = `${this.urlApi}/region/${termino}`;
    return this.getContriesReq(url);
  }
}
