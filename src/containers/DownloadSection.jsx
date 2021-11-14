import styles from "./Download.module.css";
import Button from "../components/Button";
import languages from "../languages";

const PremiumBanner = ({ lang = "en" }) => {
  const selectedLanguage = languages[lang];

  return (
    <>
      <section id="download" className={styles.download}>
        <div className={styles.contentContainer}>
          <img
            src="https://www-growth.scdn.co/static/download/laptop.svg"
            alt=""
            width="136px"
          />
          <h1>{selectedLanguage.downloadSpotify}</h1>
          <p className={styles.tagline}>
            {selectedLanguage.playMillionsOfSongs}
          </p>
          <div id={styles.cta}>
            <Button
              text={selectedLanguage.download}
              bgColor="white"
              textColor="black"
            />
          </div>
        </div>
      </section>
      <section id="available-devices">
        <div className={styles.contentContainer}>
          <h3>{selectedLanguage.everyDevice}</h3>
          <p className={styles.tagline}>
            {selectedLanguage.listenOnPhoneorTablet}
          </p>
          <div className={styles.appStores}>
            <a
              href="https://spotify.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://www-growth.scdn.co/static/badges/apple/en.png"
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3Ad05bd268d312dc9c014294034aa2d5c0"
              target="_blank"
            >
              <img
                src="https://www-growth.scdn.co/static/badges/google/en.png"
                alt="Get it on Google Play"
              />
            </a>
            <a
              href="https://www.microsoft.com/store/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct"
              target="_blank"
            >
              <img
                src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png"
                alt="Get it from Microsoft"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumBanner;
