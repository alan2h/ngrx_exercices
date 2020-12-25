import { Component, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador:number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(state => {
      console.log(state);
      this.contador = state;
    })
  }

  actualizarContador(event){
    
    //this.contador = event;
    //this.cambioContador.emit(this.contador);
  }

  multiplicar(){
    this.store.dispatch(multiplicar({numero : 10}))
    /*this.contador *= 2;
    this.cambioContador.emit(this.contador);*/
  }

  dividir(){
    this.store.dispatch(dividir({numero : 10}))
    /*this.contador /= 2;
    this.cambioContador.emit(this.contador);*/
  }

}
