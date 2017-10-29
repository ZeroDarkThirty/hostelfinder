import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm;
  constructor() { }

  onSubmit(){
    console.log(this.submittedForm.value);
    this.submittedForm.reset();
  }

  ngOnInit() {
  }

}
