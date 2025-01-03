'use client';

import { ReactNode } from 'react';
import { ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface ChartWrapperProps {
  children: ReactNode;
}

export function ChartWrapper({ children }: ChartWrapperProps) {
  return (
    <Card className="p-6 border-4 border-black">
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}