import React from 'react';
import "./Header.css"
import {useCurrencyHook} from "../../hooks/currencyHook";
import {ICurrency} from "../../modules/modules";


export function Header() {
    const { data } = useCurrencyHook()
    const filteredItems = data.filter((item) => {
        return item.cc === "USD" || item.cc === 'EUR'
    })

    return (
        <div className="currencyRate_container">
            { filteredItems.map((item:ICurrency) =>
                <div className="currencyRate_block" key={ item.r030 }>
                   <div className="currencyRate">
                       <p className="currencyRate_text">
                           1
                           <span className='abbreviation'> { item.cc }</span>
                       </p>
                   </div>
                    <div className="currencyRate">
                        <p className="currencyRate_rate">
                            { item.rate }
                            <span className='abbreviation'> UAH</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

