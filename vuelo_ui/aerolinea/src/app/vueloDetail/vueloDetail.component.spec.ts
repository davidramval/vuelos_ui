import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vueloDetailComponent  } from './vueloDetail.component';

describe('VueloDetailComponent', () => {
  let component:vueloDetailComponent ;
  let fixture: ComponentFixture<vueloDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vueloDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vueloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
