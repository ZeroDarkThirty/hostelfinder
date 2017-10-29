import { Component, OnInit, ViewChild } from '@angular/core';
import { HostelService } from '../../services/hostel.service';
import { HostelDetails } from '../../models/hostelDetails.model';

@Component({
  selector: 'app-selected-hostel',
  templateUrl: './selected-hostel.component.html',
  styleUrls: ['./selected-hostel.component.css']
})
export class SelectedHostelComponent implements OnInit {
  hostel: any;
  hostelItem: any;

  constructor(private hostelService: HostelService) { }

  ngOnInit() {
    // this.hostelService.currentHostel.subscribe(hostel => {
    //   this.hostelItem = hostel;
    //   //localStorage.setItem("hostel", JSON.stringify(this.hostelItem));
      
    // });
    this.hostel = JSON.parse(localStorage.getItem("storedHostel"));
  }

}
