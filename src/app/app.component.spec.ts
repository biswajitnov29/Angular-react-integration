// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// });

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello-world/hello.component';
import {BarChart} from './hello-world/barchart.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: any;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ AppComponent,HelloComponent,BarChart ]
      });
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      
      dom = fixture.nativeElement;
  }));

  test('should exist', () => {
      expect(component).toBeDefined();
  });

  test('should have a default title', () => {
      expect(component.title).toBe('app');
  });

  
});
