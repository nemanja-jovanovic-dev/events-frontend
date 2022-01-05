import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ImageSvgComponent } from './components/image-svg/image-svg.component';
import { VideoPhotoPageCoverComponent } from './components/video-photo-page-cover/video-photo-page-cover.component';

const components = [
  ButtonComponent,
  ImageSvgComponent,
  VideoPhotoPageCoverComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
    exports: [
        ...components,
    ]
})
export class SharedModule { }
