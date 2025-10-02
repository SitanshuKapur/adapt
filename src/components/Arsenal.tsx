import React, { useState } from 'react';
// Import our new tool data
import { toolData } from '../data/tools';

export function Arsenal() {
  // State to hold the user's search query
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the tools based on the search term
  const filteredTools = toolData.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search tools..."
        className="w-full p-3 mb-6 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Grid for the tool cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <details key={tool.id} className="bg-gray-700 rounded-lg overflow-hidden">
            <summary className="p-4 font-bold text-lg cursor-pointer hover:bg-gray-600">
              {tool.name}
              <span className="block text-sm font-normal text-gray-400">{tool.category}</span>
            </summary>
            <div className="p-4 border-t border-gray-600">
              <p className="mb-4 text-gray-300">{tool.description}</p>

              <h4 className="font-bold mb-1">Setup:</h4>
              <pre className="p-2 mb-4 bg-gray-900 rounded-md text-sm text-yellow-300 overflow-x-auto">
                <code>{tool.setupCommand}</code>
              </pre>

              <h4 className="font-bold mb-1">Common Usage:</h4>
              <pre className="p-2 bg-gray-900 rounded-md text-sm text-yellow-300 overflow-x-auto">
                <code>{tool.commonUsage}</code>
              </pre>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}