import React, { useRef } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import PuffPass from '../components/PuffPass';
import Card from '../components/Card';
import Loyalty from '../components/Loyalty';
import Token from '../components/Token';
import Nft from '../components/Nft';
import Tokenomics from '../components/Tokenomics';
import Card2 from '../components/Card2';
import RoadMap from '../components/RoadMap';
import Footer from '../components/Footer';

export default function Home() {
  const AboutRef = useRef(null);
  const PassRef = useRef(null);
  const LoyaltyRef = useRef(null);
  const TokenRef = useRef(null);
  const NFTRef = useRef(null);
  const MissionRef = useRef(null);
  const RoadmapRef = useRef(null);
  const TokenomicsRef = useRef(null);

  return (
    <div>
      <Header
        AboutRef={AboutRef}
        PassRef={PassRef}
        LoyaltyRef={LoyaltyRef}
        TokenRef={TokenRef}
        NFTRef={NFTRef}
        MissionRef={MissionRef}
        RoadmapRef={RoadmapRef}
      />
      <div className='min-h-screen w-full z-0' ref={AboutRef}>
        <About />
      </div>
      <div className='z-50 overflow-clip'>
        <Card />
      </div>
      <div className='h-screen z-0' ref={PassRef}>
        <PuffPass />
      </div>

      <div className='mt-2' ref={LoyaltyRef}>
        <Loyalty />
      </div>
      <div ref={TokenRef}>
        <Token TokenomicsRef={TokenomicsRef} />
      </div>
      <div ref={NFTRef}>
        <Nft />
      </div>
      <div ref={TokenomicsRef}>
        <Tokenomics />
      </div>
      <div className='overflow-clip' ref={MissionRef}>
        <Card2 />
      </div>
      <div ref={RoadmapRef}>
        <RoadMap />
      </div>
      <Footer />
    </div>
  );
}
