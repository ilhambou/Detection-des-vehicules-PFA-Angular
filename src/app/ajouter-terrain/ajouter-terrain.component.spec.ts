import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTerrainComponent } from './ajouter-terrain.component';

describe('AjouterTerrainComponent', () => {
  let component: AjouterTerrainComponent;
  let fixture: ComponentFixture<AjouterTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterTerrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
