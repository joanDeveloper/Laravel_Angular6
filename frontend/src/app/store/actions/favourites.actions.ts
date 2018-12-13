import { Action } from "@ngrx/store";
import { FavouritesModel } from "../models/favourites.model";



export const CARGAR_FAVORITOS = '[Favoritos] Cargar productos favoritos'
export const CARGAR_FAVORITOS_FAIL = '[Favoritos] Cargar productos favoritos FAIL'
export const CARGAR_FAVORITOS_SUCCESS = '[Favoritos] Cargar productos favoritos FAIL SUCCESS';

export class ActionCargarFavoritos implements Action {
    readonly type = CARGAR_FAVORITOS;
    constructor() { }
}

export class ActionCargarFavoritosFail implements Action {
    readonly type = CARGAR_FAVORITOS_FAIL;
    constructor( public payload: any ) {}
}

export class ActionCargarFavoritosSuccess implements Action {
    readonly type = CARGAR_FAVORITOS_SUCCESS;
    constructor(public favourites: FavouritesModel[] ) {}
}
 

export type actionsFavoritos = ActionCargarFavoritos | ActionCargarFavoritosFail | ActionCargarFavoritosSuccess;