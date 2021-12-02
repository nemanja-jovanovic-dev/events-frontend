import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-preview',
  templateUrl: './public-preview.component.html',
  styleUrls: ['./public-preview.component.scss']
})
export class PublicPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Public preview');
  }

}
