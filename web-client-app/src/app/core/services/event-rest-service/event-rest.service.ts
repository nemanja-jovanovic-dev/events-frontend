import { Injectable } from '@angular/core';
import { EventResponseModel } from '../events-service/events-model/event-response.model';

@Injectable({
    providedIn: 'root'
})
export class EventRestService {

    private _events: EventResponseModel[] = [
        {
            id: 1,
            title: 'First event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '1',
            locationId: '1',
            createdByOrganizationName: 'Organization 1',
            createdByOrganizationId: '1',
            date: '13.01.2022.',
            imagePath: './assets/images/1.jpg'
        },
        {
            id: 2,
            title: 'Second event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '2',
            locationId: '2',
            createdByOrganizationName: 'Organization 2',
            createdByOrganizationId: '2',
            date: '13.01.2022.',
            imagePath: './assets/images/2.jpg'
        },
        {
            id: 3,
            title: 'Third event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '3',
            locationId: '3',
            createdByOrganizationName: 'Organization 3',
            createdByOrganizationId: '3',
            date: '13.01.2022.',
            imagePath: './assets/images/3.jpg'
        },
        {
            id: 4,
            title: 'Fourth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '4',
            locationId: '4',
            createdByOrganizationName: 'Organization 4',
            createdByOrganizationId: '4',
            date: '13.01.2022.',
            imagePath: './assets/images/4.jpg'
        },
        {
            id: 5,
            title: 'Fifth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '5',
            locationId: '5',
            createdByOrganizationName: 'Organization 5',
            createdByOrganizationId: '5',
            date: '13.01.2022.',
            imagePath: './assets/images/5.jpg'
        },
        {
            id: 6,
            title: 'Sixth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '6',
            locationId: '6',
            createdByOrganizationName: 'Organization 6',
            createdByOrganizationId: '6',
            date: '13.01.2022.',
            imagePath: './assets/images/6.jpg'
        },
        {
            id: 7,
            title: 'Seventh event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '7',
            locationId: '7',
            createdByOrganizationName: 'Organization 7',
            createdByOrganizationId: '7',
            date: '13.01.2022.',
            imagePath: './assets/images/7.jpg'
        },
        {
            id: 8,
            title: 'Eighth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '8',
            locationId: '8',
            createdByOrganizationName: 'Organization 8',
            createdByOrganizationId: '8',
            date: '13.01.2022.',
            imagePath: './assets/images/8.jpg'
        },
        {
            id: 9,
            title: 'Ninth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '9',
            locationId: '9',
            createdByOrganizationName: 'Organization 9',
            createdByOrganizationId: '9',
            date: '13.01.2022.',
            imagePath: './assets/images/9.jpg'
        },
        {
            id: 10,
            title: 'Tenth event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '10',
            locationId: '10',
            createdByOrganizationName: 'Organization 10',
            createdByOrganizationId: '10',
            date: '13.01.2022.',
            imagePath: './assets/images/10.jpg'
        },
        {
            id: 11,
            title: 'Eleventh event',
            start: '8:00 PM',
            end: '1:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi error illum nostrum optio rem sunt, tempora vel velit!',
            categoryId: '11',
            locationId: '11',
            createdByOrganizationName: 'Organization 11',
            createdByOrganizationId: '11',
            date: '13.01.2022.',
            imagePath: './assets/images/11.jpg'
        }
    ];

    public get events(): EventResponseModel[] {
        return this._events;
    }

    public set events(value: EventResponseModel[]) {
        this._events = value;
    }

    constructor() { }

    public getEventById(eventId: number): EventResponseModel {
        return this._events.find(event => event.id === eventId);
    }
}
