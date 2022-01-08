import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

    @Input() size: string;
    @Input() headerImage: string;
    @Input() headerTitle: string;
    @Input() headerSubtitle: string;
    @Input() date: string;
    @Input() time: string;
    @Input() contentTitle: string;
    @Input() description: string;
    @Input() buttonText: string;

    @Output() clickEvent = new EventEmitter<void>();
}
