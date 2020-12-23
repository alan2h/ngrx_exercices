import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador:number;
  @Output() actualizarContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 10
    this.actualizarContador.emit(this.contador);
   }

}
