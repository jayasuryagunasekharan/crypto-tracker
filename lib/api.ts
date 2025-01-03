const COINCAP_API_BASE = 'https://api.coincap.io/v2';

export async function getAssets() {
  const response = await fetch(`${COINCAP_API_BASE}/assets`);
  if (!response.ok) throw new Error('Failed to fetch assets');
  return response.json();
}

export async function getAssetHistory(id: string) {
  const response = await fetch(
    `${COINCAP_API_BASE}/assets/${id}/history?interval=d1`
  );
  if (!response.ok) throw new Error('Failed to fetch asset history');
  return response.json();
}

export function formatPrice(price: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));
}

export function formatMarketCap(marketCap: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(Number(marketCap));
}