import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
// Komunitas
import KomunitasUser from "./pages/komunitas/KomunitasUser";
import DetailPost from "./pages/komunitas/DetailPost";
import KomunitasGuest from "./pages/komunitas/KomunitasGuest";

// LatihanFisik
import LatihanFisik from "./pages/latihanfisik/LatihanFisik";
import RekomendasiLatihanFisik from "./pages/latihanfisik/RekomendasiLatihanFisik";
import Signup from "./pages/authentication/signup";
import OnBoarding from "./pages/authentication/onboarding";
import Login from "./pages/authentication/login";
import Forgotpassword from "./pages/authentication/ForgotPassword";
import LandingPageUser from "./pages/landingpages/LandingPageUser";
import LandingPageGuest from "./pages/landingpages/LandingPageGuest";
import InformasiPribadi from "./pages/landingpages/InformasiPribadi";
import Detailgymguest from "./pages/latihanfisik/Detailgymguest";
import Detailgymuser from "./pages/latihanfisik/Detailgymuser";
import ForgotpasswordCode from "./pages/authentication/ForgotPasswordCode";
import Favorites from "./pages/landingpages/Favorites";
import Makanansehat from "./pages/makanansehat/pages/Makanansehat";
import Makanansehatuser from "./pages/makanansehat/pages/Makanansehatuser";
import DetailLatihanFisikUser from "./pages/latihanfisik/DetailLatihanFisikUser";
import DetailLatihanFisikGuest from "./pages/latihanfisik/DetailLatihanFisikGuest";

function App() {
  const { param } = useParams();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing-page-guest" />}></Route>
        <Route exact path="komunitas-guest" element={<KomunitasGuest />} />
        <Route path="komunitas-user" element={<KomunitasUser />} />
        <Route path="detail-post" element={<DetailPost />} />

        <Route path="latihan-fisik" element={<LatihanFisik />} />
        <Route path="makanan-sehat" element={<Makanansehat />} />
        <Route path="makanan-sehat-user" element={<Makanansehatuser />} />
        <Route
          path="rekomendasi-latihan-fisik"
          element={<RekomendasiLatihanFisik />}
        />
        <Route path="detail-gym-guest" element={<Detailgymguest />} />
        <Route path="detail-gym-user" element={<Detailgymuser />} />
        <Route
          path="detail-latihan-fisik-user"
          element={<DetailLatihanFisikUser />}
        />
        <Route
          path="detail-latihan-fisik-guest"
          element={<DetailLatihanFisikGuest />}
        />

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="forgot-password-code" element={<ForgotpasswordCode />} />

        <Route path="landing-page-guest" element={<LandingPageGuest />} />
        <Route path="landing-page-user" element={<LandingPageUser />} />
        <Route path="informasi-pribadi" element={<InformasiPribadi />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
