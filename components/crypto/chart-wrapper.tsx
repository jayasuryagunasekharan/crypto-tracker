'use client';

import React, { ReactElement } from 'react';
import { ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface ChartWrapperProps {
  children: ReactElement;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ children }) => {
  return (
    <Card>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartWrapper;