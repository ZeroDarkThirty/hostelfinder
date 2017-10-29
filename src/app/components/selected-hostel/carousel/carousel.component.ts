import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  hostel: any;
  constructor() { }

  ngOnInit() {
    this.hostel = JSON.parse(localStorage.getItem("storedHostel"));
  }

}
