import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FDetailPage } from './f-detail.page';

describe('FDetailPage', () => {
  let component: FDetailPage;
  let fixture: ComponentFixture<FDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
