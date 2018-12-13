import { FavouritesModel } from "../models/favourites.model";
import * as fromFavoritos from "../actions";


export interface FavouritesState {
    
    favourites: FavouritesModel[];
    loaded: boolean; /* Articulos favoritos cargados */
    loading: boolean; /* Cargando articulos favoritos */
    error: any;

}

const estadoInicial: FavouritesState = {
    favourites: [],
    loaded: false,
    loading: false,
    error: null
};


export function favouritesReducer(state = estadoInicial, action: fromFavoritos.actionsFavoritos): FavouritesState /*siempre devolvera algio de tipo FavouritesState */ 
{
    switch (action.type) {
        case fromFavoritos.CARGAR_FAVORITOS:
            return {
                ...state,
                loading:true
            };
        
        case fromFavoritos.CARGAR_FAVORITOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                favourites: action.favourites
            };
        
        case fromFavoritos.CARGAR_FAVORITOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
    
        default:
            return state;
    }
}
