import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Device, ArticleListConfig, DevicesService } from '../../core';
@Component({
  selector: 'app-device-list',
  //styleUrls: ['article-list.component.css'],
  templateUrl: './device-list.component.html'
})
export class DeviceListComponent {
  devices: Device = {} as Device;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private deviceService: DevicesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { devices: Device }) => {
        this.devices = data.devices;

        // Load devices
        this.deviceService.getAll()
          .subscribe(
            data => {
              console.log("res frontend devices:", data);
              this.devices = data;

            },
            err => {
              console.log("Error devices", err);

            }
          );
      }
    );

  }

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  results: Device[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    console.log("ENTRA RUNQUERY");
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.limit * (this.currentPage - 1));
    }

    this.deviceService.query(this.query)
      .subscribe(data => {
        this.loading = false;
        this.results = data.devices;
        console.log("device", data.devices);
        console.log("deviceLimit", this.limit);
        console.log("deviceQuery", this.query);
        //console.log("devicecount",data.articlesCount);
        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        this.totalPages = Array.from(new Array(Math.ceil(data.devices.length / this.limit)), (val, index) => index + 1);
      });

  }
}