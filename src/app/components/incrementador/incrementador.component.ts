import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @Input() nombre:string = 'Leyenda';
  @Input() progreso:number = 50;
  @Output() actualizar:EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValor:number){
    if(newValor>=100) this.progreso = 100;
    else if(newValor<=0) this.progreso = 0;
    else this.progreso = newValor;
    this.txtProgreso.nativeElement.value = this.progreso;
    this.actualizar.emit(this.progreso);
  }

  cambiarValor(valor:number) {
    this.progreso += valor;
    if(this.progreso>100) this.progreso = 100;
    if(this.progreso<0) this.progreso = 0;
    this.txtProgreso.nativeElement.focus();
    this.actualizar.emit(this.progreso);
  }
}
