import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
  time: string;
  constructor() {
    this.time = new Date().toISOString()
   }

  ngOnInit() {
  }

}
