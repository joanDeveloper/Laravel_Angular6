import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceListConfig, CategoryService, UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private categoriesService: CategoryService,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
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
    );

    this.categoriesService.getAll()
    .subscribe(categories => {
      console.log("categories",categories);
      this.categories = categories;
      this.tagsLoaded = true;
    });
  }

  setListTo(type: string = '', filters: Object = {}) {
    this.listConfig = {type: type, filters: filters};
  }

  onFilterDat(filter){
    console.log("home list FILTERDATA", filter);
    this.listConfig = filter;
  }

}
