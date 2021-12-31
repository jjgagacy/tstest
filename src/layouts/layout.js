import React, { Component } from 'react';
import {Link, Outlet} from "react-router-dom";
class Layout extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>Return To Main Page</Link>
                <div>
                    <Outlet />
                </div>
            </div>
        )
    }
}
export default Layout;