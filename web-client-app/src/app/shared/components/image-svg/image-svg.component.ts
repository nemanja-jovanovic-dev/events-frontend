import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-svg',
  templateUrl: './image-svg.component.html',
  styleUrls: ['./image-svg.component.scss']
})
export class ImageSvgComponent {

  @Input() imageUrl: string;
  @Input() cssClass: string;
  @Input() imageDescription: string;
  @Input() imageHeight: number;

}
