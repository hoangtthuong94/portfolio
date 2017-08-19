import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesBlockComponent } from './particles-block.component';

describe('ParticlesBlockComponent', () => {
  let component: ParticlesBlockComponent;
  let fixture: ComponentFixture<ParticlesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
