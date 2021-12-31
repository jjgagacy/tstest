import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Index extends Component{
    render(){
        return(
            <div>
                <h1 onClick={() => console.log('hello world.')}>Hello World!</h1>
                <ul>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/count'}>Count</Link></li>
                </ul>
            </div>
        );
    }
}
export default Index;
