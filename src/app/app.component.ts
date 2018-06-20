import { Component,OnInit,OnChanges,SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from './hello-world/hello.component';
import {BarChart} from './hello-world/barchart.component';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: ['../src/app/app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'app';

  name:string="ABC";
barChartData:any[]=[5,10,1,3];
barChartSize:any[]=[500,500];
  
  helloComponent: HelloComponent;
  barChartComponent:BarChart;

  ngOnInit() {
    this.helloComponent = ReactDOM.render(
      React.createElement(HelloComponent),
      document.getElementById('react-root')
    );
    this.helloComponent.setState({"name":this.name});

    this.barChartComponent=ReactDOM.render(
      React.createElement(BarChart),
      document.getElementById('bar-chart')
    );

    
    this.barChartComponent.setState({"data":this.barChartData});
    this.barChartComponent.setState({"size":this.barChartSize});

    console.log('app.component.ts::ngOnInit', 'helloComponent', this.helloComponent);

    
  }
  onChangeName(){
    this.helloComponent.setState({"name":this.name});
  }
  ngOnChanges(changes: SimpleChanges) {
    
  }
}
