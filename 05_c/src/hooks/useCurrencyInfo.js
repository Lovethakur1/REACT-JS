import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error(`Error fetching currency data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
                setData({});
            }
        };

        fetchCurrencyData();
    }, [currency]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return data;
}

export default UseCurrencyInfo;
