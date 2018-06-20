// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TestComponent } from './test.component';

// describe('TestComponent', () => {
//   let component: TestComponent;
//   let fixture: ComponentFixture<TestComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TestComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('AppComponent', () => {
  let component: TestComponent;
  let dom: any;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ TestComponent ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      
      dom = fixture.nativeElement;
  }));

  test('should exist', () => {
      expect(component).toBeDefined();
  });

  test('should have a default title', () => {
      expect(component.name).toBe('Test');
  });

  
});
