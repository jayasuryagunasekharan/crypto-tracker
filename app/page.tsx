import { getAssets } from '@/lib/api';
import { PageHeader } from '@/components/ui/page-header';
import AssetList from '@/components/asset-list';

export const revalidate = 60;

export default async function Home() {
  const assets = await getAssets();
  
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="CRYPTO TRACKER" />
        <AssetList initialAssets={assets.data} />
      </div>
    </main>
  );
}