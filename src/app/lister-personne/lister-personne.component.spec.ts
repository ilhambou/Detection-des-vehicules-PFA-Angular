import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPersonneComponent } from './lister-personne.component';

describe('ListerPersonneComponent', () => {
  let component: ListerPersonneComponent;
  let fixture: ComponentFixture<ListerPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerPersonneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
