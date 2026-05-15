import { Hero } from '../components/Hero';
import { Featured } from '../components/Featured';
import { Specs } from '../components/Specs';

export function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Specs />
    </>
  );
}