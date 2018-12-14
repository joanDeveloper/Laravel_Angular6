import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as favouritesActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { FavouriteService } from '../../core/services';

@Injectable()
export class FavouritesEffects {

    constructor(
        private actions$: Actions,
        public favouriteService: FavouriteService
    ) {}

    @Effect({ dispatch: true}) /*Esro es un obserbable y se despacha mediante el dispatch */
    cargarFavourites$ = this.actions$.ofType( favouritesActions.CARGAR_FAVORITOS )
        .pipe(
            /* recibe un obserbable lo cancela y devuelve un nuevo observable */
            switchMap(() => {
                return this.favouriteService.getFavourites()
                    .pipe(
                        map(data => {
                            console.warn(data)
                            new favouritesActions.ActionCargarFavoritosSuccess([])
                        }), catchError(err => of(new favouritesActions.ActionCargarFavoritosFail(err)))
                    );
            })            
            /* map( action => {
                console.log(action);
                return action  
            }) */
        );


}
