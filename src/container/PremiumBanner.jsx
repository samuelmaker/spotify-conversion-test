import "./Banner.css";
import Button from "../components/Button";
import languages from "../languages";

const PremiumBanner = ({lang = 'de'}) => {
  const selectedLanguage = languages[lang]
  
  return (
  <div className="banner">
    <div className="content-container">
      <h1>{selectedLanguage.title}</h1>
      <h2 className="tagline">
        {selectedLanguage.tagline}
      </h2>
      <div className="cta-container">
        <Button text={selectedLanguage.getStartedCTA} />
        <Button text={selectedLanguage.viewPlansCTA} secondary />
      </div>
      <p className="disclaimer-text">{selectedLanguage.termsAndConditions}</p>
    </div>
  </div>
)}

export default PremiumBanner;
