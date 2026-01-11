import React, { useState } from 'react';
import { Upload, Users, DollarSign, Loader2, X } from 'lucide-react';

export default function ReceiptSplitter() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [people, setPeople] = useState(['']);
  const [itemAssignments, setItemAssignments] = useState({});
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setError(null);
      setReceiptData(null);
      setPeople(['']);
      setItemAssignments({});
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeReceipt = async () => {
    if (!image) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(image);
      });

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image',
                  source: {
                    type: 'base64',
                    media_type: image.type,
                    data: base64Data,
                  },
                },
                {
                  type: 'text',
                  text: `Analyze this receipt image and extract ALL the information. Return ONLY a valid JSON object with no other text or formatting. DO NOT use markdown code blocks or backticks.

Your response must be ONLY this JSON structure:
{
  "storeName": "store name or null",
  "date": "date or null",
  "items": [
    {"name": "item name", "price": number}
  ],
  "subtotal": number or null,
  "tax": number or null,
  "total": number
}

CRITICAL: Your entire response must be valid JSON only. Do not include any text before or after the JSON object.`
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      let responseText = data.content[0].text;
      
      responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      const parsedData = JSON.parse(responseText);
      setReceiptData(parsedData);
      
      // Initialize item assignments
      const assignments = {};
      parsedData.items.forEach((item, index) => {
        assignments[index] = [];
      });
      setItemAssignments(assignments);
      
    } catch (err) {
      console.error('Error analyzing receipt:', err);
      setError('Failed to analyze receipt. Please try again with a clearer image.');
    } finally {
      setLoading(false);
    }
  };

  const addPerson = () => {
    setPeople([...people, '']);
  };

  const removePerson = (index) => {
    if (people.length > 1) {
      const personName = people[index];
      setPeople(people.filter((_, i) => i !== index));
      
      // Remove this person from all item assignments
      const newAssignments = { ...itemAssignments };
      Object.keys(newAssignments).forEach(itemIndex => {
        newAssignments[itemIndex] = newAssignments[itemIndex].filter(p => p !== personName);
      });
      setItemAssignments(newAssignments);
    }
  };

  const updatePersonName = (index, newName) => {
    const oldName = people[index];
    const newPeople = [...people];
    newPeople[index] = newName;
    setPeople(newPeople);
    
    // Update item assignments with new name
    if (oldName) {
      const newAssignments = { ...itemAssignments };
      Object.keys(newAssignments).forEach(itemIndex => {
        newAssignments[itemIndex] = newAssignments[itemIndex].map(p => 
          p === oldName ? newName : p
        );
      });
      setItemAssignments(newAssignments);
    }
  };

  const toggleItemAssignment = (itemIndex, personName) => {
    if (!personName.trim()) return;
    
    const newAssignments = { ...itemAssignments };
    const currentAssignments = newAssignments[itemIndex] || [];
    
    if (currentAssignments.includes(personName)) {
      newAssignments[itemIndex] = currentAssignments.filter(p => p !== personName);
    } else {
      newAssignments[itemIndex] = [...currentAssignments, personName];
    }
    
    setItemAssignments(newAssignments);
  };

  const calculateSplit = () => {
    if (!receiptData) return null;
    
    const validPeople = people.filter(p => p.trim() !== '');
    if (validPeople.length === 0) return null;
    
    // Calculate per-person totals
    const personTotals = {};
    validPeople.forEach(person => {
      personTotals[person] = 0;
    });
    
    // Add up items assigned to each person
    receiptData.items.forEach((item, index) => {
      const assignedPeople = itemAssignments[index] || [];
      if (assignedPeople.length > 0) {
        const pricePerPerson = item.price / assignedPeople.length;
        assignedPeople.forEach(person => {
          personTotals[person] += pricePerPerson;
        });
      }
    });
    
    // Handle tax and unassigned items
    const assignedItemsTotal = Object.values(personTotals).reduce((sum, val) => sum + val, 0);
    const unassignedAmount = receiptData.total - assignedItemsTotal;
    
    // Split unassigned amount (tax, fees, unassigned items) equally
    if (unassignedAmount > 0) {
      const perPersonUnassigned = unassignedAmount / validPeople.length;
      validPeople.forEach(person => {
        personTotals[person] += perPersonUnassigned;
      });
    }
    
    return {
      total: receiptData.total,
      personTotals,
      people: validPeople
    };
  };

  const split = calculateSplit();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Receipt Bill Splitter</h1>
            <p className="text-gray-600">Upload a receipt and assign items to split fairly</p>
          </div>

          <div className="space-y-6">
            {/* Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="receipt-upload"
              />
              <label htmlFor="receipt-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-700 mb-2">
                  {image ? 'Receipt uploaded! Click to change' : 'Click to upload receipt'}
                </p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              </label>
            </div>

            {preview && (
              <div className="space-y-4">
                <img
                  src={preview}
                  alt="Receipt preview"
                  className="max-h-64 mx-auto rounded-lg shadow-md"
                />
                
                <button
                  onClick={analyzeReceipt}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Receipt...
                    </>
                  ) : (
                    'Analyze Receipt'
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {receiptData && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Left Column - People & Items */}
                <div className="space-y-6">
                  {/* People Section */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      People Involved
                    </h2>
                    
                    <div className="space-y-2 mb-3">
                      {people.map((person, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={person}
                            onChange={(e) => updatePersonName(index, e.target.value)}
                            placeholder={`Person ${index + 1} name`}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          {people.length > 1 && (
                            <button
                              onClick={() => removePerson(index)}
                              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addPerson}
                      className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                      + Add Person
                    </button>
                  </div>

                  {/* Items Assignment */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Assign Items</h2>
                    <p className="text-sm text-gray-600 mb-4">Click on person names to assign items to them</p>
                    
                    <div className="space-y-3">
                      {receiptData.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-gray-800">{item.name}</span>
                            <span className="text-indigo-600 font-bold">${item.price.toFixed(2)}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            {people.filter(p => p.trim()).map((person, personIndex) => (
                              <button
                                key={personIndex}
                                onClick={() => toggleItemAssignment(itemIndex, person)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                  (itemAssignments[itemIndex] || []).includes(person)
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                {person}
                              </button>
                            ))}
                          </div>
                          
                          {(itemAssignments[itemIndex] || []).length > 1 && (
                            <p className="text-xs text-gray-500 mt-2">
                              Split between {itemAssignments[itemIndex].length} people: ${(item.price / itemAssignments[itemIndex].length).toFixed(2)} each
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Receipt Details & Split */}
                <div className="space-y-6">
                  {/* Receipt Details */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Receipt Details</h2>
                    {receiptData.storeName && (
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Store:</span> {receiptData.storeName}
                      </p>
                    )}
                    {receiptData.date && (
                      <p className="text-gray-700 mb-4">
                        <span className="font-semibold">Date:</span> {receiptData.date}
                      </p>
                    )}
                    
                    {receiptData.subtotal && (
                      <div className="flex justify-between text-gray-600 pt-2 mt-2 border-t">
                        <span>Subtotal:</span>
                        <span>${receiptData.subtotal.toFixed(2)}</span>
                      </div>
                    )}
                    {receiptData.tax && (
                      <div className="flex justify-between text-gray-600 pt-1">
                        <span>Tax:</span>
                        <span>${receiptData.tax.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 mt-2 border-t-2">
                      <span>Total:</span>
                      <span>${receiptData.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Split Breakdown */}
                  {split && (
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6" />
                        Fair Split Breakdown
                      </h2>

                      <div className="space-y-3">
                        {split.people.map((person, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-gray-800">{person}</span>
                              <span className="text-2xl font-bold text-indigo-600">
                                ${split.personTotals[person].toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t-2 border-indigo-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-800">Total:</span>
                          <span className="text-2xl font-bold text-gray-800">${split.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
