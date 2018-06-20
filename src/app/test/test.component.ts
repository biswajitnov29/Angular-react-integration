import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: require('./test.component.html'),
  styles: ['../src/app/test/test.component.css']
})
export class TestComponent implements OnInit {

  name:string="Test";
  constructor() { }

  ngOnInit() {
  }

}
