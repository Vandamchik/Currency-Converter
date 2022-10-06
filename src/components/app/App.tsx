import React from 'react';
import './App.css';
import { useCurrencyHook } from "../../hooks/currencyHook";
import  InstrumentSwitcher  from "../InstrumentSwitcher/InstumentSwitcher";


export function App() {
    const { loading } = useCurrencyHook()
    const currentDate = new Date().toDateString();

    return (
     <>
         <h1 className="title">Currency exchange rate on
             <span className="title-date"> { currentDate }</span>
         </h1>
        { loading ? <p className="loading">Loading...</p>
            :
            <div className='wrapper'>
                <InstrumentSwitcher />
        </div> }
     </>
  );
}


