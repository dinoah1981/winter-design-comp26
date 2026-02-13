import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Overview } from '@/sections/Overview';
import { BasicMaterials } from '@/sections/BasicMaterials';
import { TeamTimeMaterials } from '@/sections/TeamTimeMaterials';
import { WorkshopMaterials } from '@/sections/WorkshopMaterials';
import { Prizes } from '@/sections/Prizes';
import { Resources } from '@/sections/Resources';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Overview />
        <BasicMaterials />
        <TeamTimeMaterials />
        <WorkshopMaterials />
        <Prizes />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
