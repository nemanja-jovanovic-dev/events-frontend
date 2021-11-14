import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() cssClass: string;
  @Input() shape: string;

  constructor() { }

  ngOnInit(): void {
  }

}
