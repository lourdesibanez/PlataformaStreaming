import { Footer, Navbar } from '../components';
import { Explore, Hero } from '../sections';
import Catalog from '../sections/Catalog';
import FetchExample from '../sections/FetchExample';

const Page = () => (
  <div className="bg-primary-black h-auto">
    {/* overflow-hidden */}
    <div className="relative h-auto min-h-screen">
      <Navbar />
      <div className="gradient-03 z-0" />
      <Catalog />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      {/* <Footer /> */}
    </div>
  </div>
);

export default Page;
