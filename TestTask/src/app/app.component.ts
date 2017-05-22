import {Component, Input} from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() regForm;
  name: string = '';
  email: string = '';
  password: string = '';
  count = 0;
  showNext(){
    this.count ++;
  }
  create(){
    if (this.count == 2){
      let user = new User(this.name, this.email, this.password);
      alert('Thank You! ' + 'Your Name: ' + user.name + ' Your Email: '+ user.email + ' Your Password: '+ user.password);
      this.count = 0;
      this.name = '';
      this.email = '';
      this.password = '';
      this.regForm.reset();
    }
  }

}
