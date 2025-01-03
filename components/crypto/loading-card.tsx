'use client';

import { Card } from '@/components/ui/card';

interface LoadingCardProps {
  height?: number;
}

export function LoadingCard({ height = 400 }: LoadingCardProps) {
  return (
    <Card className="p-6 border-4 border-black">
      <div style={{ height: `${height}px` }} className="flex items-center justify-center">
        Loading...
      </div>
    </Card>
  );
}