import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {


  @Input()  public placeholder:string = ''
  @Output() public onEnter  : EventEmitter<string> = new  EventEmitter();
  @Output() public onDebounce:EventEmitter<string> = new  EventEmitter();
  
  deboncerSuscription?:Subscription
  debouncer: Subject<string> = new  Subject();
  termino:string = ''

  constructor() { }
  
  ngOnInit() {
   this.deboncerSuscription = this.debouncer.pipe(debounceTime(3000)).subscribe(valor =>{
    // console.log('valor', valor)
   this.onDebounce.emit(valor)
   })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.deboncerSuscription?.unsubscribe( )
  }
   buscar(){
    this.onEnter.emit(this.termino)
   }
 
   keypress(searchTerm:string){
    console.log(searchTerm)
   this.debouncer.next(searchTerm)
   }
}
