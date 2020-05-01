import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./components/car";
// const myTag= "<h1> Hello World, My First Awesome React App</h1>";
// ReactDOM.render(myTag, document.getElementById('my-app'));
/*
1. Use of render function
2. states(from js to HTML) and props(HTML to JS)

class Car extends React.Component{

    render() {
        return <h2> I have a {this.props.color} {this.props.brand} </h2>;
    }
}

ReactDOM.render(<Car brand='Jaguar' color='white'  />, document.getElementById('root'))

How to concatenate while rendering the JSX

Regarding Props
If your component has a constructor function,
the props should always be passed to the constructor and also to the React.Component via the super() method.
React Props are read-only! You will get an error if you try to change their value.

Questions:
1) Why we need to mention super() before using this?



class Garage extends React.Component{
    render() {
        return (
            <div>
                <h1>I have a cool Garage, where i can park 10 cars.</h1>
                <h2>Let me pick a car for today
                    <select value={this.props.cars.value} name="supercar" >
                        <option value="modelX">ModelX</option>
                        <option value="model3">Model3</option>
                        <option value="modelY">ModelY</option>

                    </select>
                </h2>

                <Car todaycar={this.props.cars.value}/>

            </div>

        )
    }
}

ReactDOM.render(<Garage  />, document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom';
class Tick extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timer: new Date().toLocaleTimeString();
    }
  }
  render (){
    return "Hello World"
  }
}

React.render(<Tick/>,document.getElementByID('root'));

Three main phase Mounting, Updating and Unmounting.
constructor()
getDerivedStateFromProps()
render()
componentDidMount()

 */




