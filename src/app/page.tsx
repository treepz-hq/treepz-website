import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "Treepz: Africa's Leading Corporate Mobility Solution.",
};


