import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DeviceListConfig, CategoryService } from '../../core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
//import { stringify } from 'querystring';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Query } from "./types";

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  data: Observable<any>;
  loading: boolean;
  currentUser: any;

  constructor(
    private categoriesService: CategoryService,
    private apollo: Apollo,

  ) { }

  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Array<string> = [];
  @Output() filterData = new EventEmitter();

  ngOnInit() {
    this.categoriesService.getAll()
      .subscribe(categories => {
        console.log("categoriesFilter", categories);
        this.categories = categories;
      });

    //this.displayRegistrations();
  }

  displayRegistrations() {
    /*console.log("1");
    const getRegistrations = gql`
    {
      categories {
        data {
          id
          slug
        }
      }
    }
    `;

    this.apollo.watchQuery({
      query: getRegistrations
    }).valueChanges.pipe(
      map(result => result.data)
    );*/

    /********* 2 option ******/
    this.apollo.query({
      query: gql`
      {
        categories {
          data {
            id
            slug
          }
        }
      }
      `
    }).subscribe(result => {
      console.log('result', result);

    });
  }

  eventEmiter(type: string = '', filters: Object = {}) {
    console.log("EVENT EMITER");
    this.listConfig = { type: type, filters: filters };
    this.filterData.emit(this.listConfig);
  }
}
