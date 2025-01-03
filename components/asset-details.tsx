'use client';

import { useEffect, useState } from 'react';
import { Asset, AssetHistory } from '@/lib/types';
import { getAssetHistory, formatPrice, formatMarketCap } from '@/lib/api';
import { Card } from '@/components/ui/card';
import { PriceChart } from '@/components/crypto/price-chart';

interface AssetDetailsProps {
  asset: Asset;
}

export default function AssetDetails({ asset }: AssetDetailsProps) {
  const [history, setHistory] = useState<AssetHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getAssetHistory(asset.id);
        setHistory(response.data);
      } catch (error) {
        console.error('Failed to fetch asset history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [asset.id]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-black bg-black text-white p-3 rotate-[-1deg] inline-block">
            {asset.name} ({asset.symbol})
          </h2>
          <p className="mt-2 text-lg">
            Rank #{asset.rank} • {formatPrice(asset.priceUsd)}
          </p>
        </div>
      </div>

      <PriceChart data={history} loading={loading} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 border-4 border-black">
          <h3 className="font-bold mb-2">Market Cap</h3>
          <p className="text-xl">{formatMarketCap(asset.marketCapUsd)}</p>
        </Card>
        
        <Card className="p-4 border-4 border-black">
          <h3 className="font-bold mb-2">24h Volume</h3>
          <p className="text-xl">{formatMarketCap(asset.volumeUsd24Hr)}</p>
        </Card>
        
        <Card className="p-4 border-4 border-black">
          <h3 className="font-bold mb-2">Supply</h3>
          <p className="text-xl">
            {Number(asset.supply).toLocaleString()}
            {asset.maxSupply && (
              <span className="text-sm text-muted-foreground">
                /{Number(asset.maxSupply).toLocaleString()}
              </span>
            )}
          </p>
        </Card>
      </div>
    </div>
  );
}