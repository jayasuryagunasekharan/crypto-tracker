'use client';

import { AssetHistory } from '@/lib/types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingCard } from './loading-card';
import { ChartWrapper } from './chart-wrapper';

interface PriceChartProps {
  data: AssetHistory[];
  loading: boolean;
}

export function PriceChart({ data, loading }: PriceChartProps) {
  if (loading) {
    return <LoadingCard />;
  }

  return (
    <ChartWrapper>
      <LineChart data={data}>
        <XAxis 
          dataKey="date"
          tickFormatter={(timestamp: string) => new Date(timestamp).toLocaleDateString()}
        />
        <YAxis
          dataKey="priceUsd"
          tickFormatter={(value: string) => new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(Number(value))}
        />
        <Tooltip
          formatter={(value: any) => [
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(Number(value)),
            'Price'
          ]}
          labelFormatter={(label: string) => new Date(label).toLocaleDateString()}
        />
        <Line
          type="monotone"
          dataKey="priceUsd"
          stroke="#000"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartWrapper>
  );
}