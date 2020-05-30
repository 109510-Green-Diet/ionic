import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.page.html',
  styleUrls: ['./write.page.scss'],

})
export class WritePage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;


  segment = 0;
  NavController: any;
  time: string;
  ngOnInit() { }
  public foodForm: FormGroup;
  private food: number = 1;
  public seasoningForm: FormGroup;
  private seasoning: number = 1;

  constructor(private formBuilder: FormBuilder, private formBuilder2: FormBuilder) {
    this.time = new Date().toISOString()
    this.foodForm = formBuilder.group({
      food1: ['', Validators.required]
    });
    this.seasoningForm = formBuilder2.group({
      seasoning1: ['', Validators.required]
    });
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  addFood() {
    this.food++;
    this.foodForm.addControl('food' + this.food, new FormControl('', Validators.required));
  }
  removeFood(control) {
    this.foodForm.removeControl(control.key);
  }

  addSeasoning() {
    this.seasoning++;
    this.seasoningForm.addControl('seasoning' + this.seasoning, new FormControl('', Validators.required));
  }
  removeSeasoning(control) {
    this.seasoningForm.removeControl(control.key);
  }

}
