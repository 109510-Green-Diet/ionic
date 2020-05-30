import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QDetailPage } from './q-detail.page';

describe('QDetailPage', () => {
  let component: QDetailPage;
  let fixture: ComponentFixture<QDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
