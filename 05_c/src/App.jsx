import { useState, useEffect } from 'react';
import UseCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [converted, setConverted] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);

  // Ensure currencyInfo contains 'rates' before accessing it
  const options = currencyInfo.rates ? Object.keys(currencyInfo.rates) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo.rates && currencyInfo.rates[to]) {
      setConverted(amount * currencyInfo.rates[to]);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-illustration/indian-rupee-background-stock-market-600w-1609208116.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {`from ${from} to ${to}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
