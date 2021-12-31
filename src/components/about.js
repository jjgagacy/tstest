import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.showAbout = this.showAbout.bind(this);
    }

    showAbout(e) {
        console.log('about');
    }

    render() {
        return (
            <div>
                <h1 style={{backgroundColor: "lightgray"}}>about</h1>
                <button onClick={this.showAbout}>Show About</button>
                <br/>
                <input onChange={() => console.log('changed')}/>
            </div>
        )
    }
}

export default About;
