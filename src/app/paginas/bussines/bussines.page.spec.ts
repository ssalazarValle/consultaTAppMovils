import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BussinesPage } from './bussines.page';

describe('BussinesPage', () => {
  let component: BussinesPage;
  let fixture: ComponentFixture<BussinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BussinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
