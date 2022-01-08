import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventResponseModel} from './events-model/event-response.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private httpClient: HttpClient) {
    }

    apiBaseUrl = 'http://localhost:8081/events';

    postEvent(event: EventResponseModel): Observable<EventResponseModel> {
        return this.httpClient.post<EventResponseModel>(this.apiBaseUrl, event);
    }

    // category(category: string): Observable<any> {
    //   return this.httpClient.post<any>('/categories', category);
    // }
    //
    category(): Observable<any> {
        return this.httpClient.get<any>('http://localhost:8081/categories');
    }

}
