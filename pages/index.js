import Head from "next/head";
import FeatureVideo from "../components/FeatureVideo";
import FeatureGrid from "../components/FeatureGrid";
import FeatureGridImage from "../components/FeatureGridImage";
import FeatureGridFlipped from "../components/FeatureGridFlipped";
import LogoBanner from "../components/LogoBanner";
import DropDown1 from "../components/DropDown1";
import DropDownUser from "../components/DropDownUser";
import NavBase from "../components/NavBase";
import NavEcom from "../components/NavEcom";
import NavSearch from "../components/NavSearch";
import NavAvatar from "../components/NavAvatar";
import NavCategories from './../components/NavCategories'
import NavSearchMid from './../components/NavSearchMid'
import HeroEcom from "../components/HeroEcom";
import Footer from "../components/Footer";
import Header1 from './../components/Header1'


export default function Home() {
  return (
    <div className="container m-auto box-border h-full">
      
      <HeroEcom />
      <Header1 />
      <FeatureGrid />  
      <LogoBanner />
      <FeatureGrid />  
      <FeatureVideo />
      <FeatureGridFlipped />
      <FeatureGridImage />
      

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
          <Footer />
      </div>
    </div>
  );
}
