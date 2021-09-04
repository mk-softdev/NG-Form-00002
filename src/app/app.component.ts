import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGForm';

  topics = ['Angular','React','Vue'];

  userModel = new User('Manas','manaspradhan589@gmail.com',8800363523,'','morning',true);

}
