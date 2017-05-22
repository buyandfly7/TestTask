import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    EmailComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
