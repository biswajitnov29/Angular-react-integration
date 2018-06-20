import * as React from 'react';
interface HelloProps {
  name: string;
}

export class HelloComponent extends React.Component<HelloProps, {}>  {
  spanStyle = {
    color: '#000',
    fontSize: '2.4rem',
    marginBottom: '10px'
  };

  state: any = {};

  constructor(props: any = {}) {
    super(props);

    console.log('hello.component.tsx::constructor', '');
  }

  componentDidMount(): void {
    console.log('hello.component.tsx::componentDidMount', '');
    
  }

  render() {
    return (
      <div>
        <span style={this.spanStyle}>This is a {this.state.name}</span>
        <input type="text" value={this.state.name}/>
      </div>
    );
  }
}