import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Camera, CameraOptions, PictureSourceType} from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

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
  public stepForm: FormGroup;
  private step: number = 1;

  constructor(private formBuilder: FormBuilder, private formBuilder2: FormBuilder, private formBuilder3: FormBuilder, private camera: Camera, private actionSheetController: ActionSheetController) {
    this.time = new Date().toISOString()
    this.foodForm = formBuilder.group({
      food1: ['', Validators.required]
    });
    this.seasoningForm = formBuilder2.group({
      seasoning1: ['', Validators.required]
    });
    this.stepForm = formBuilder3.group({
      step: ['', Validators.required]
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

  addStep() {
    this.step++;
    this.stepForm.addControl('step' + this.step, new FormControl('', Validators.required));
  }
  removeStep(control) {
    this.stepForm.removeControl(control.key);
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '從相簿中選擇',
        handler: () => {
         this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
     },
     {
      text: '開啟相機',
      handler: () => {
        this.takePicture(this.camera.PictureSourceType.CAMERA);
       }
     },
     {
      text: '取消',
      role: 'cancel'
     }]
   });
   await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }


}