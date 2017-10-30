import { Component, OnInit } from '@angular/core';
import { HostelDetails } from '../../models/hostelDetails.model';
import  { Router } from '@angular/router';
import { HostelService } from '../../services/hostel.service';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})

export class HostelsComponent implements OnInit {
  hostelDetails: HostelDetails[] = [];
  //selected: HostelDetails;
selected: any;

  constructor(private router: Router, private hostelService: HostelService) {
    for(var i = 0; i < 12; i ++ ){
      let image;
      let address;
      
      if(i % 2 == 0 ? image = "../../../assets/img/room.jpg" : image = "../../../assets/img/room2.jpg")
      if(i % 2 == 0 ? address = "Glen Waverly, Melbourne" : address = "Thornbury, Melbourne")

      this.hostelDetails.push(
        new HostelDetails(
          i,
          image,
          200, address,
          "Beautiful Big Room for a single occupant with Bills New Queen size bed, built in Wardrobe/ Almirah, Fully furnished, Security room lock, Toilet shower/ Jet, washing machine, etc 2 mins walk to La Trobe University, next to Tram 86 and bus stop, near to Mc Donald's, malls, Cafe, Restaurants, Coles, etc in vicinity, 14 km from city",
          "Shared",
          true,
          true, true, "Included",
          "Flexible",
          "Off street",
          "Included",
          800,
          {name: 'John Doe', phone: 6141234567}
        )
      )
    }
  }

  selectedHostel(details){
    this.router.navigate(['/hostel', details.id]);
    localStorage.setItem("storedHostel", JSON.stringify(details));
    //this.hostelService.getHostelDetails(details);
  }

  ngOnInit() {
    //this.hostelService.currentHostel.subscribe(hostel => this.selected = hostel);
  }

}
