import ChainBanner from "../../../assets/chain.png";
import LogoHQ from "../../../assets/HQBANNER.webp";
import Armory from "../../../assets/armory.png";

function TheArmory() {
  return (
    <div className="armory__container">
      <div className="armory__topbox">
        <img src={LogoHQ} alt="TheLogo" className="armory__logo" />
        <div className="armory__banner">
          <div className="armory__chains">
            <img src={ChainBanner} alt="ChainBanner" className="chain_one"/>
            <img src={ChainBanner} alt="ChainBanner" className="chain_two"/>
          </div>
          <img src={Armory} alt="Banner" className="armory__sword" />
        </div>
      </div>
    </div>
  );
}

export default TheArmory;
