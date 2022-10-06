import {useEffect,useState} from "react";
import {ICurrency} from "../modules/modules";
import axios from "axios";

export function useCurrencyHook() {
    const [data, setData] = useState<ICurrency[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const BASE_URL_CURRENCY:string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    async function fetchCurrency() {
            setLoading(true);
            const response = await axios.get<ICurrency[]>(`${BASE_URL_CURRENCY}`);
            setData(response.data);
            setLoading(false);
    }

    useEffect(() => {
        fetchCurrency();
    },[])

    return { data, loading }
}