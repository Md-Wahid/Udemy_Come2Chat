import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  profileForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }

}
