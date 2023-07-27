import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  profileForm: FormGroup = new FormGroup({});
  apiErrorMessages: string[] = [];

  constructor(private formBuilder: FormBuilder, private chatService: ChatService){}

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
    this.apiErrorMessages = [];

    if(this.userForm.valid){
      this.chatService.registerUser(this.userForm.value).subscribe({
        next: () => {
          console.info('open chat');
        },
        error : error => {
          if(typeof(error.error) !== 'object'){
            this.apiErrorMessages.push(error.error);
          }
        }
      })
    }
  }

}
