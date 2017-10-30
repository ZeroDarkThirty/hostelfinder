import { Component, OnInit, ViewChild } from '@angular/core';
import { HostelDetails } from '../../models/hostelDetails.model';

@Component({
  selector: 'app-selected-hostel',
  templateUrl: './selected-hostel.component.html',
  styleUrls: ['./selected-hostel.component.css']
})
export class SelectedHostelComponent implements OnInit {
  hostel: any;

  constructor() { }

  ngOnInit() {
    this.hostel = JSON.parse(localStorage.getItem("storedHostel"));
  }

}
