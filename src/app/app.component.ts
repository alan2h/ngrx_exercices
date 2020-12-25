import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './contador/contador.actions';
import { AppState } from './app.reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor( private store: Store<AppState> ){
    this.store.select('contador').subscribe(state => {
      console.log(state);
      this.contador = state;
    })
  }

  incrementar(){
    this.store.dispatch(increment());
  }

  decrementar(){
    this.store.dispatch(decrement());
  }
  
  cambioContador(event){
  }

}
