import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  time: string;
  constructor() {
    this.time = new Date().toISOString()
   }
   
  ngOnInit() {
  }

}
