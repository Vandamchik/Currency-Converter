import React from 'react';
import "./Header.css"


export function Header(props : any) {
    const {currency} = props

    return (
        <div className="header">
            <p>{ currency.txt }</p>
            <p>{ currency.cc }</p>
            <p>{ currency.rate }</p>
            <p>{ currency.exchangedate }</p>
        </div>
    );
}

