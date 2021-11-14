import styles from "./Premium.module.css";
import Button from "../components/Button";
import languages from "../languages";

const PremiumBanner = ({ lang = "de" }) => {
  const selectedLanguage = languages[lang];

  return (
    <section id="premium-banner" className={styles.banner}>
      <div className={styles.contentContainer}>
        <h1>{selectedLanguage.title}</h1>
        <h2 className={styles.tagline}>{selectedLanguage.tagline}</h2>
        <div className={styles.ctaContainer}>
          <Button text={selectedLanguage.getStartedCTA} />
          <Button
            text={selectedLanguage.viewPlansCTA}
            borderColor="white"
            bgColor="transparent"
          />
        </div>
        <p className={styles.disclaimerText}>
          {selectedLanguage.termsAndConditions}
        </p>
      </div>
    </section>
  );
};

export default PremiumBanner;
