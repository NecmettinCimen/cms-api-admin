import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenteditComponent } from './contentedit.component';

describe('ContenteditComponent', () => {
  let component: ContenteditComponent;
  let fixture: ComponentFixture<ContenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
