import {Component, OnInit} from '@angular/core';
import {EventResponseModel} from '../../../../../../../core/services/events-service/events-model/event-response.model';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

    events: EventResponseModel[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.events = [
            {
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
    }

}
