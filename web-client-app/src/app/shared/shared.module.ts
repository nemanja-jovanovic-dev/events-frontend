import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from './components/button/button.component';
import {ImageSvgComponent} from './components/image-svg/image-svg.component';
import {VideoPhotoPageCoverComponent} from './components/video-photo-page-cover/video-photo-page-cover.component';
import {CardComponent} from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {PlaceholderTemplateComponent} from './components/placeholder-template/placeholder-template.component';

const components = [
    ButtonComponent,
    ImageSvgComponent,
    VideoPhotoPageCoverComponent,
    CardComponent,
    PlaceholderTemplateComponent,
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
    ],
    exports: [
        ...components,
    ]
})
export class SharedModule {
}
