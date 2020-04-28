import { Component, OnInit } from '@angular/core';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  images = ['/assets/angular.svg', '/assets/logo-stack.png'];

  constructor() { }

  ngOnInit() {
  }

}
