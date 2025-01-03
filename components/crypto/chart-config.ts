import { formatPrice } from '@/lib/api';

export const chartConfig = {
  xAxis: {
    dataKey: 'date',
    tickFormatter: (timestamp: string) => new Date(timestamp).toLocaleDateString(),
  },
  yAxis: {
    dataKey: 'priceUsd',
    tickFormatter: (value: string) => formatPrice(value),
  },
  tooltip: {
    formatter: (value: any) => [formatPrice(value), 'Price'],
    labelFormatter: (label: string) => new Date(label).toLocaleDateString(),
  },
};