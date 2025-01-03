'use client';

import { Asset } from '@/lib/types';
import { formatMarketCap, formatPrice } from '@/lib/api';
import { Card } from '@/components/ui/card';

interface AssetCardProps {
  asset: Asset;
  onClick: () => void;
}

export function AssetCard({ asset, onClick }: AssetCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer transform hover:scale-[1.02] transition-transform border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold">{asset.name}</h2>
          <p className="text-sm text-muted-foreground">{asset.symbol}</p>
        </div>
        <span className="bg-black text-white px-2 py-1 text-sm rotate-[2deg]">
          #{asset.rank}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Price</span>
          <span>{formatPrice(asset.priceUsd)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Market Cap</span>
          <span>{formatMarketCap(asset.marketCapUsd)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">24h Change</span>
          <span className={Number(asset.changePercent24Hr) > 0 ? 'text-green-600' : 'text-red-600'}>
            {Number(asset.changePercent24Hr).toFixed(2)}%
          </span>
        </div>
      </div>
    </Card>
  );
}