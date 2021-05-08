import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  confirmPassword = '';
  password = '';
  login = '';

  constructor(
    private _route: Router
  ) {}

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._route.navigateByUrl(path);
  }

  doLogin() {
  }
}
