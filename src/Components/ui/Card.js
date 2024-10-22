// src/Components/ui/card.js
import React from 'react';

export const Card = ({ children }) => (
  <div className="border rounded shadow-sm p-4 bg-white">
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b pb-2 mb-2">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardContent = ({ children }) => (
  <div>{children}</div>
);

export const CardDescription = ({ children }) => (
  <p className="text-gray-600">{children}</p>
);
