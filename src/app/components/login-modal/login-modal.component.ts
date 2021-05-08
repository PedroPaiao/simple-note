import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  login = '';
  password = '';
  @Output() valueChange = new EventEmitter();
  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._route.navigateByUrl(path);
  }
  // doLogin() {
  //   console.log(this.logged)
  //   this.valueChange.emit("logged");
  // }
}
