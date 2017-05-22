import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass']
})
export class PasswordComponent implements OnInit {
  @Input() user;
  constructor() { }
  ngOnInit() {
  }
  show(){
    console.log(this.user.name + this.user.email + this.user.password)
  }
}
