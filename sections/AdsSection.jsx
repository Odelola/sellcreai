import styles from './AdsSection.module.css'
import RetailImage from "../assets/images/AdsSectionImages/RetailImage.svg"
import HotelImage from "../assets/images/AdsSectionImages/HotelImage.svg"
import IndustrialImage from "../assets/images/AdsSectionImages/IndustrialImage.svg"
import LandImage from "../assets/images/AdsSectionImages/LandImage.svg"
import OfficeImage from "../assets/images/AdsSectionImages/OfficeImage.svg"
import MultiFamilyImage from "../assets/images/AdsSectionImages/MultiFamilyImage.svg"

const AdsSection = () => {
  const estatePropertyTypes = [
    {
      icon: RetailImage,
      text: "Retail",
    },
    {
      icon: MultiFamilyImage,
      text: "Multi-family",
    },
    {
      icon: OfficeImage,
      text: "Office",
    },
    {
      icon: IndustrialImage,
      text: "Industrial",
    },
    {
      icon: HotelImage,
      text: "Hotel",
    },
    {
      icon: LandImage,
      text: "Land",
    },

  ];
  return (
    <section className={styles.adsSectionContainer} id="adssection">
      <div>
        <p className='text-primary'>Create OMs and Ads For</p>
        <h1>Various Real Estate Property Types</h1>
      </div>
      <div className={styles.estatePropertyContainer}>
        {estatePropertyTypes.map((item, index) => (
          <div className={styles.estatePropertyCard} key={index}>
            <img src={item.icon.src} alt={`${item.text} Image`} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsSection;  