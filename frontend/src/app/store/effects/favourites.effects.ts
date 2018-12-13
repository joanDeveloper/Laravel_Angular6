import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as favouritesActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
/* import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service'; */

@Injectable()
export class FavouritesEffects {

    constructor(
        private actions$: Actions,
        /* public usuariosService: UsuarioService */
    ) {}

    @Effect({ dispatch: false}) /*Esro es un obserbable y se despacha mediante el dispatch */
    cargarFavourites$ = this.actions$.ofType( favouritesActions.CARGAR_FAVORITOS )
        .pipe(
            
            map( action => {
                console.log(action);
                return action  
            })
        );


}
