import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicModalAdvancedPage } from './ionic-modal-advanced.page';

describe('IonicModalAdvancedPage', () => {
  let component: IonicModalAdvancedPage;
  let fixture: ComponentFixture<IonicModalAdvancedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicModalAdvancedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicModalAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
