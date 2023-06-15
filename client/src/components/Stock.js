import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Stock = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);
  const [selectedStockSymbol, setSelectedStockSymbol] = useState('IBM'); // Updated default value
  const [selectedStockName, setSelectedStockName] = useState('IBM United States'); // Added state variable
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const fetchStock = async () => {
      const API_KEY = 'U9A3Y7LVCUKPS2C7';
  
      try {
        setIsLoading(true); // Show the loader
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${selectedStockSymbol}&outputsize=compact&apikey=${API_KEY}`
        );
        const data = await response.json();
        const timeSeriesData = data['Time Series (Daily)'];
        const extractedDates = Object.keys(timeSeriesData);
        const extractedOpenValues = extractedDates.map(
          (date) => timeSeriesData[date]['1. open']
        );
        setStockChartXValues(extractedDates);
        setStockChartYValues(extractedOpenValues);
        setIsLoading(false); // Hide the loader
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Hide the loader
      }
    };
    fetchStock();
  }, [selectedStockSymbol]);

  const handleStockSymbolChange = (event) => {
    const selectedSymbol = event.target.value;
    setSelectedStockSymbol(selectedSymbol);
    setSelectedStockName(event.target.options[event.target.selectedIndex].text);
  };

  return (
    <div>
      <h1 className='text-center'>Express Stocks</h1>
     
      {isLoading ? (
        <div className='text-center'>Loading...</div> // Show loader while fetching data
      ) : (
        <>
        
       <div style={{display: "flex",alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
          <Plot
            data={[
              {
                x: stockChartXValues,
                y: stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
            ]}
            layout={{ width: 720, height: 440, title: 'Last 100 Days Stock Data' }}
          />
          </div>
          <div className='text-center'>Selected Stock: {selectedStockName}</div>
        </>
      )}
       <br/>
       <div className='text-center'>Select Company:</div>
       <br/>
       <div style={{display: "flex",alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
       <select value={selectedStockSymbol} onChange={handleStockSymbolChange}>
        <option value="RELIANCE.BSE">Reliance BSE</option>
        <option value="IBM">IBM United States</option>
        <option value="TSCO.LON">Tesco UK-LSE</option>
        <option value="MSFT">Microsoft</option>
        <option value="AMZN">Amazon</option>
        <option value="FB">Facebook</option>
        <option value="SHOP.TRT">Shopify Canada-TSE</option>
        {/* Add more stock symbols as needed */}
      </select>
      </div>
    </div>
  );
};

export default Stock;
