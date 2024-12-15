import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home';
import { ListingsPage } from './pages/listings';
import { ListingDetailsPage } from './pages/listing-details';
import { CreateListingPage } from './pages/create-listing';
import { ProfilePage } from './pages/profile';
import { LoginPage } from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { MessagesPage } from './pages/messages';
import { HowItWorksPage } from './pages/info/how-it-works';
import { SafetyGuidePage } from './pages/info/safety-guide';
import { FAQPage } from './pages/info/faq';
import { PrivacyPolicyPage } from './pages/legal/privacy-policy';
import { TermsOfServicePage } from './pages/legal/terms-of-service';
import { CookiePolicyPage } from './pages/legal/cookie-policy';
import { ProtectedRoute } from './components/auth/protected-route';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listings/:id" element={<ListingDetailsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/safety-guide" element={<SafetyGuidePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-listing"
            element={
              <ProtectedRoute>
                <CreateListingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;