import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPoliceTerrainComponent } from './lister-police-terrain.component';

describe('ListerPoliceTerrainComponent', () => {
  let component: ListerPoliceTerrainComponent;
  let fixture: ComponentFixture<ListerPoliceTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerPoliceTerrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerPoliceTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
