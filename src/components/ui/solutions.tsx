import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
    <div className="bg-gray-50 rounded-lg p-6">
      {children}
    </div>
  </div>
);