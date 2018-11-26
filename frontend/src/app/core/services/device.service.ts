import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Device, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class DevicesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ArticleListConfig): Observable<{devices: Device[], devicesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/devices',
      new HttpParams({ fromObject: params })
    );
  }

  getAll(): Observable<Device> {
    return this.apiService.get('/devices')
      .pipe(map(data => data.devices));
  }

  detail(slug): Observable<Device> {
    return this.apiService.get('/devices/'+slug)
      .pipe(map(data => data.devices));
  }

  /*destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }*/

/*
  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }
  */
  save(article): Observable<string> {
    console.log("service contacts",article);
    /*return this.apiService
    .post('/contact', {article: article})
    .pipe(map(data => {
      console.log(data);
      return data;
    }));*/
    return this.apiService.get('/tags')
          .pipe(map(data => data.tags));
  }

  /*save(article): Observable<string> {
    return this.apiService
    .post('/articles', {article: article})
    .pipe(map(data => {
      console.log(data);
      return data;
    }));
  }*/

  /*favorite(slug): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }*/


}
