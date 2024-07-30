import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooLibComponent } from './foo-lib.component';

describe('FooLibComponent', () => {
  let component: FooLibComponent;
  let fixture: ComponentFixture<FooLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
