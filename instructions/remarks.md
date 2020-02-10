כשמייצרים פרוייקט ריאקט יש 3 דרכים לייבוא רכיבים וליצור תקשורת :



[index]:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout/layout';
ReactDOM.render(<Layout />, document.getElementById('root'));

[layout]:

import React, { Component } from 'react';
import "./layout.css"
class Layout extends Component {
    render() { return ( <Footer/>)}}
    export default Layout;

[footer]:
import React, { Component } from 'react';
import "./footer.css"
class Footer extends React.Component {
    render() { 
        return (            
             <div className="footer">
                    </div> );
    }
}

export default Footer;
