import React from 'react';
import '../Styles/Left.css';
import "../Styles/Index.css";
import Left from './Left.jsx';
import Right from './Right.jsx';

function Index() {

    return (
        <div className="app">
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <Right />
            </div>
        </div>
    );
}

export default Index;
