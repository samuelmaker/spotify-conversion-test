import PremiumBanner from "../containers/PremiumBanner";
import DownloadSection from "../containers/DownloadSection";

function LandingPage() {
  return (
    <div className="landing">
      <PremiumBanner lang="en" />
      <DownloadSection lang="en" />
    </div>
  );
}

export default LandingPage;
