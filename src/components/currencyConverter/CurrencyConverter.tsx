import React from 'react';
import "./CurrencyConverter.css"

export function CurrencyConverter(props: any) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;


    return (
        <div className="form">
            <input
            className="input"
            type="number"
            value={amount || ""}
            onChange={onChangeAmount}
            />
            <select
            className="select"
            value={ selectedCurrency }
            onChange={ onChangeCurrency }
            >
                {currencyOptions.map((option:string[],index:number) =>
                    <option
                        key={`${ option } ${ index }`}
                        value={ option }
                        className="option"
                    >{ option }</option>
                )}
            </select>
        </div>
    );
}
