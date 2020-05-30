import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HDetailPage } from './h-detail.page';

describe('HDetailPage', () => {
  let component: HDetailPage;
  let fixture: ComponentFixture<HDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
