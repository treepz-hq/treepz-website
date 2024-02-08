import RentACarComponent from '@/components/RentACar';
import HeroComponent from './../components/Hero';
import FeaturesComponent from '@/components/Feature';
import FutureTransportation from '@/components/Future';
import UsersAppComponent from '@/components/UserApps';
import BetterTogetherComponent from '@/components/Trips';

export default function Home() {
  return (
    <main className="">
      <HeroComponent />
      <FeaturesComponent />
      <RentACarComponent />
      <FutureTransportation />
      <UsersAppComponent />
      <BetterTogetherComponent />
    </main>
  );
}
