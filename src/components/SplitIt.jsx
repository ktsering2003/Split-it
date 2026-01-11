import React, { useState } from 'react';
import '../css/SplitIt.css';

const SplitIt = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [splitResult, setSplitResult] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setSelectedFile(file);
      setReceiptData(null);
      setSplitResult(null);
    } else {
      alert('Please select a PNG or JPG image file');
    }
  };

  const analyzeReceipt = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis - replace with actual Claude API call
    setTimeout(() => {
      const mockReceiptData = {
        items: [
          { name: 'Burger Deluxe', price: 15.99 },
          { name: 'Caesar Salad', price: 12.49 },
          { name: 'Fries', price: 6.99 },
          { name: 'Coke (2)', price: 4.98 },
        ],
        subtotal: 40.45,
        tax: 3.64,
        total: 44.09
      };
      
      setReceiptData(mockReceiptData);
      setIsAnalyzing(false);
    }, 2000);
  };

  const calculateSplit = () => {
    if (!receiptData || numberOfPeople < 1) return;
    
    const amountPerPerson = receiptData.total / numberOfPeople;
    setSplitResult({
      amountPerPerson: amountPerPerson.toFixed(2),
      numberOfPeople
    });
  };

  return (
    <div className="split-it-container">
      <div className="split-it-header">
        <h1>Split It</h1>
        <p>Upload a receipt and split the bill instantly</p>
      </div>

      <div className="split-it-content">
        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-area">
            <input
              type="file"
              id="receipt-upload"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <label htmlFor="receipt-upload" className="upload-label">
              <div className="upload-icon">📸</div>
              <div className="upload-text">
                {selectedFile ? selectedFile.name : 'Click to upload receipt'}
              </div>
              <div className="upload-subtext">PNG, JPG up to 10MB</div>
            </label>
          </div>

          {selectedFile && (
            <button 
              className="analyze-btn"
              onClick={analyzeReceipt}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing Receipt...' : 'Analyze Receipt'}
            </button>
          )}
        </div>

        {/* Receipt Analysis Results */}
        {receiptData && (
          <div className="receipt-results">
            <h3>Receipt Details</h3>
            <div className="items-list">
              {receiptData.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="receipt-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${receiptData.subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Tax:</span>
                <span>${receiptData.tax.toFixed(2)}</span>
              </div>
              <div className="total-row final-total">
                <span>Total:</span>
                <span>${receiptData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Split Calculator */}
        {receiptData && (
          <div className="split-section">
            <h3>Split the Bill</h3>
            <div className="people-input">
              <label htmlFor="people-count">Number of people:</label>
              <input
                type="number"
                id="people-count"
                min="1"
                max="20"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 1)}
              />
            </div>
            
            <button className="calculate-btn" onClick={calculateSplit}>
              Calculate Split
            </button>

            {splitResult && (
              <div className="split-result">
                <div className="split-amount">
                  Each person owes: <strong>${splitResult.amountPerPerson}</strong>
                </div>
                <div className="split-details">
                  Total: ${receiptData.total.toFixed(2)} ÷ {splitResult.numberOfPeople} people
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitIt;