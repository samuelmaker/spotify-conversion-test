import "./Banner.css";
import Button from "../components/Button";

const PremiumBanner = () => (
  <div className="banner">
    <div className="content-container">
      <h1>Listen without limits</h1>
      <h2 className="tagline">
        Ad-free music listening, on-demand, and offline.
      </h2>
      <div className="cta-container">
        <Button text="Get Started" />
        <Button text="View Plans" secondary />
      </div>
      <p className="disclaimer-text">* Terms and conditions apply</p>
    </div>
  </div>
);

export default PremiumBanner;
