import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-chat-questions',
  templateUrl: './chat-questions.component.html',
  styleUrls: ['./chat-questions.component.css']
})
export class ChatQuestionsComponent implements OnInit {

  private info = [];
  public info2 = [];
  public email:String;

  sendMessageForm:FormGroup = new FormGroup({
    question: new FormControl(null,Validators.required),
    email: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
  })
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.userService.profile()
    .subscribe(
      data=>{this.profileFill(data),this.listQuestions()},
      error=>this.router.navigateByUrl('/home')
    )

  }

  profileFill(profileData)
  {
    this.sendMessageForm.get('email').setValue(profileData.email);
    this.sendMessageForm.get('firstName').setValue(profileData.firstName);
    this.sendMessageForm.get('lastName').setValue(profileData.lastName);
    this.email= profileData.email;
  }

  sendMessage()
  {
    if(this.sendMessageForm.valid)
    {
      console.log(this.sendMessageForm.value)
    this.userService.askQuestion(JSON.stringify(this.sendMessageForm.value)).subscribe(
      data=> {console.log(data); this.listQuestions()},
      error=> {console.error(error);this.toastr.success('message was not sent', 'fail')}
      )
      this.listQuestions();
    }
  }

  listQuestions()
  {
    this.info2 = []

    console.log(this.email)

    this.userService.listQuestions({email:this.sendMessageForm.get('email').value}).subscribe(
      data=> {console.log(data);this.chatFill(data)},
      error=> {console.error(error);this.toastr.success('message was not sent', 'fail')}
      )
  }
  chatFill(data)
  {
    data.forEach(element => {
      console.log(element)

      this.info.push(element.question);
      if(element.answer)
      this.info.push(element.answer);
      else
      this.info.push("not answered yet");

      this.info.push(element.dateQuestion);
      if(element.dateAnswer)
      this.info.push(element.dateAnswer);
      else
      this.info.push(false);

      this.info2.push(this.info);
      this.info=[];
    });

    console.log(this.info2);
  }

}
