import { createAction, props } from '@ngrx/store';

export const increment = createAction('[contador] Increment');
export const decrement = createAction('[contador] Decrement');
export const multiplicar = createAction('[contador] Multiplicar', 
props<{numero: number}>()
);

export const dividir = createAction('[contador] Dividir', 
props<{numero: number}>()
);

export const reset = createAction('[contador] Reset', 
props<{numero: number}>()
);