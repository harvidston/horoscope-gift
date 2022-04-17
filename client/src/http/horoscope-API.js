import React, { Component } from 'react';


export default class Aztro extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            json: {}
        }
    }

      
    componentDidMount() {
        const URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => { this.setState({ json }); });
    }

    render() {
        return (

            <div>
                Current Date: {this.state.json.current_date} <br />
                Compatibility: {this.state.json.compatibility} <br />
                Lucky Number: {this.state.json.lucky_number} <br />
                Lucky Time: {this.state.json.lucky_time} <br />
                Color: {this.state.json.color} <br />
                Date Range: {this.state.json.date_range} <br />
                Mood: {this.state.json.mood} <br />
                Description: {this.state.json.description} <br />
            </div>
        );
    }
}


   
   
// export default class Archive extends React.Component { 

//     saySomething(something) {
//         console.log(something);
//     }

//     handleClick(e) {
//         this.saySomething("element clicked");
//     }    

//     componentDidMount() {
//         this.saySomething("component did mount");
//     }

//     render() {
//         return <button onClick={this.handleClick.bind(this)} value="Click me" />;
//     }
// }