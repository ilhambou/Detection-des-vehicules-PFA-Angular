import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFicheComponent } from './lister-fiche.component';

describe('ListerFicheComponent', () => {
  let component: ListerFicheComponent;
  let fixture: ComponentFixture<ListerFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerFicheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
