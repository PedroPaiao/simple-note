import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbletron-demonstration',
  templateUrl: './jumbletron-demonstration.component.html',
  styleUrls: ['./jumbletron-demonstration.component.scss']
})
export class JumbletronDemonstrationComponent implements OnInit {
  demonstrations = [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
  }

}
