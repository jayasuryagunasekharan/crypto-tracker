'use client';

import { useState } from 'react';
import { Asset } from '@/lib/types';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { AssetCard } from '@/components/crypto/asset-card';
import AssetDetails from './asset-details';

interface AssetListProps {
  initialAssets: Asset[];
}

export default function AssetList({ initialAssets }: AssetListProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {initialAssets.map((asset) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            onClick={() => setSelectedAsset(asset)}
          />
        ))}
      </div>

      <Dialog open={!!selectedAsset} onOpenChange={() => setSelectedAsset(null)}>
        <DialogContent className="max-w-3xl border-4 border-black">
          <DialogTitle className="sr-only">
            {selectedAsset?.name} Details
          </DialogTitle>
          {selectedAsset && <AssetDetails asset={selectedAsset} />}
        </DialogContent>
      </Dialog>
    </>
  );
}