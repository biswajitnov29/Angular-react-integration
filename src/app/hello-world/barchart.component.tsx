import * as React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';


interface BarChartProps {
    data: any,
    size: any[]
  }

export class BarChart extends React.Component<BarChartProps, {}> {

    node:any;
    state: any = {
        data:[],
        size:[]
    };

   constructor(props: any = {}){
      super(props)
      this.createBarChart = this.createBarChart.bind(this);
   }
   componentDidMount() {
      this.createBarChart();
   }
   componentDidUpdate() {
      this.createBarChart();
   }
   createBarChart() {
      const node = this.node;
      const dataMax = max(this.state.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.state.size[1]]);
   select(node)
      .selectAll('rect')
      .data(this.state.data)
      .enter()
      .append('rect');
   
   select(node)
      .selectAll('rect')
      .data(this.state.data)
      .exit()
      .remove();
   
   select(node)
      .selectAll('rect')
      .data(this.state.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.state.size[1] - yScale(d) )
      .attr('height', d => yScale(d))
      .attr('width', 25);
   }
render() {
    this.createBarChart();
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}