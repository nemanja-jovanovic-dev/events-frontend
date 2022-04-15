import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    eventId: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params
            .pipe(take(1))
            .subscribe((param) => (this.eventId = param.id));
    }
}
