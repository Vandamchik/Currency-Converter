import React, { useEffect, useState } from 'react';
import './Convert.css';
import { CurrencyConverter } from "../currencyConverter/CurrencyConverter";
import axios from "axios";
import { IRate } from "../../modules/modules";
import { SyncOutlined } from "@ant-design/icons";


export function Converter() {
    const BASE_URL:string = 'https://api.exchangerate.host/latest'
    const [currencyOptions, setCurrencyOptions] = useState<string[]>([])
    const [fromCurrency, setFromCurrency] = useState<string>("")
    const [toCurrency, setToCurrency] = useState<string>("")
    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [amount, setAmount] = useState<number>(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(true)

    let toAmount:number, fromAmount:number
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate!;
    }
    else {
        toAmount = amount
        fromAmount = amount / exchangeRate!
    }

    async function fetchRate() {
        const response:any = await axios.get<IRate>(`${BASE_URL}`)
        const data:any = response.data
        const UAHCurrency:string = Object.keys(data.rates)[147]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(UAHCurrency)
        setExchangeRate(data.rates.UAH)
    }

    async function fetchToFrom() {
        const response:any = await axios.get<any>(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        const data:any = response.data
        setExchangeRate(data.rates[toCurrency])
    }

    useEffect(() => {
        fetchRate()
    }, [])

    useEffect(() => {
        fetchToFrom()
    }, [fromCurrency, toCurrency])

    function handelFromAmountChange( event: React.ChangeEvent<HTMLInputElement> ) {
        setAmount(+event.target.value)
        setAmountInFromCurrency(true)
    }

    function handelToAmountChange( event: React.ChangeEvent<HTMLInputElement> ) {
        setAmount(+event.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <div className="container_converter">
            <CurrencyConverter
                currencyOptions={ currencyOptions }
                selectedCurrency={ fromCurrency }
                onChangeCurrency={ (e:React.ChangeEvent<HTMLInputElement>) =>
                    setFromCurrency(e.target.value) }
                onChangeAmount={ handelFromAmountChange }
                amount={ fromAmount }
            />
            <SyncOutlined className="iconCycle" />
            <CurrencyConverter
                currencyOptions={ currencyOptions }
                selectedCurrency={ toCurrency }
                onChangeCurrency={ (e:React.ChangeEvent<HTMLInputElement>) =>
                    setToCurrency(e.target.value) }
                onChangeAmount={ handelToAmountChange }
                amount={ toAmount }
            />
        </div>
    );
}
