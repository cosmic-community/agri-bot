import { getCrops, getPestDiseases } from '@/lib/cosmic';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  const [crops, pests] = await Promise.all([getCrops(), getPestDiseases()]);

  return <HomePageClient crops={crops} pests={pests} />;
}