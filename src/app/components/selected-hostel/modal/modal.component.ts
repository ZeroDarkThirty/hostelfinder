import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm;
  formDetail;
  constructor(private _router: Router) { }

  onSubmit(){
    console.log(this.submittedForm);
    this.formDetail = this.submittedForm.value;
    this.submittedForm.reset();
  }

  ngOnInit() {
  }

}
