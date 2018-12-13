import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceListConfig, CategoryService, UserService } from '../core';

/* ngrx */
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as favouritesActions from '../store/actions';
import { FavouritesModel } from '../store/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  favourites: FavouritesModel[] = [];

  constructor(
    private router: Router,
    private categoriesService: CategoryService,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  isAuthenticated: boolean;
  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    
    this.store.dispatch(new favouritesActions.ActionCargarFavoritos())


    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // set the article list accordingly
        if (authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      }
    );/* END */

    this.categoriesService.getAll()
    .subscribe(categories => {
      console.log("categories",categories);
      this.categories = categories;
      this.tagsLoaded = true;
    });/* END */
  }

  setListTo(type: string = '', filters: Object = {}) {
    this.listConfig = {type: type, filters: filters};
  }

  onFilterDat(filter){
    console.log("home list FILTERDATA", filter);
    this.listConfig = filter;
  }

}
