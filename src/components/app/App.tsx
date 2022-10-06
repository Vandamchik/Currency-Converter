import React from 'react';
import './App.css';
import { ICurrency } from "../../modules/modules";
import { Header } from "../header/Header";
import { Converter } from "../converter/Converter";
import { useCurrencyHook } from "../../hooks/currencyHook";


export function App() {
    const {data, loading } = useCurrencyHook()

    return (
     <>
        { loading ? <p className="loading">Loading...</p>
            :
            <div className='wrapper'>
                <h1 style={{textAlign: 'center'}}>The current exchange rate against the hryvnia</h1>
                {data
                    .filter((item:ICurrency) => item.cc === "USD" || item.cc === 'EUR')
                    .map((item:ICurrency) => <Header currency={item} key={item.r030} />)
                }
                <Converter />
        </div> }
     </>
  );
}


