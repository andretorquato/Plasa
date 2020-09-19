import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosthumousComponent } from './posthumous.component';

describe('PosthumousComponent', () => {
  let component: PosthumousComponent;
  let fixture: ComponentFixture<PosthumousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosthumousComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosthumousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
