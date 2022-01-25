import Head from "next/head";
import CartTW from "../components/CartTW";
import CtaTW from "../components/CtaTW";
import FeatureTW from "../components/FeatureTW";
import ProductOverviewTW from "../components/ProductOverviewTW";
import Promo from "../components/Promo";
import HeroTW from './../components/HeroTW'
import ProductListTW from './../components/ProductListTW'
import ProductFeaturesTW from './../components/ProductFeaturesTW'
import ProductQuickView from './../components/ProductQuickView'
import ThreeColumn from './../components/ThreeColumn'
import FourColumn from "../components/FourColumn";
import AvatarGroup from './../components/AvatarGroup'


export default function Home() {
  return (
    <div className="container m-auto box-border h-full">
<HeroTW />
    
  <FeatureTW /> 
    <Promo />
    <ProductQuickView />
    <ProductListTW />
    <ThreeColumn />
    <FourColumn />
    <ProductOverviewTW />
    <AvatarGroup />
    <ProductFeaturesTW />
    
    <CartTW />
  <CtaTW /> 

      <div className="flex flex-col justify-center items-center h-full w-full">
        
        
        <div className="block">
          <h1 className="block mt-20 mb-7">Welcome to Bare NextJS & Tailwind CSS!</h1>
        </div>

        <div>
          <a className="block px-3 py-3
            text-sm font-semibold text-center
            text-white uppercase transition
            duration-200 ease-in-out
            bg-indigo-500 rounded-lg
            cursor-pointer
            hover:bg-indigo-900">Tailwind Button
          </a>
        </div>

        <div>
          <button className='btn btn-primary mb-20 mt-3'>daisyUI Button</button>
        </div>
      </div>
    </div>
  );
}
