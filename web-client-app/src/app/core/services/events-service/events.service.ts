import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  apiBaseUrl = '/api/events/';

  getEvents(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiBaseUrl);
  }
}
