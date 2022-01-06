import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-placeholder-template',
    templateUrl: './placeholder-template.component.html',
    styleUrls: ['./placeholder-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderTemplateComponent implements OnInit {

    @Input() iconClass: string;
    @Input() title: string;
    @Input() message: string;
    @Input() buttonText: string;
    @Input() templateSizeClass: string;

    @Output() clickEvent = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
