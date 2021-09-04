import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGForm';

  topics = ['Angular','React','Vue'];

  topicHasError = true;

  userModel = new User('Manas','manaspradhan589@gmail.com',8800363523,'default','morning',true);

  constructor(private _enrollmentService:EnrollmentService){
 
  }

  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    //console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
  }

}
