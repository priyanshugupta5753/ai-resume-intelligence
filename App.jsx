import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { AnimatePresence } from 'framer-motion';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/Upload';
import JobMatch from './pages/JobMatch';
import Suggestions from './pages/Suggestions';
import PricingPage from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <AuthProvider>
        <ResumeProvider>


      <div className="min-h-screen bg-background text-white selection:bg-primary/30">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/upload" element={<ProtectedRoute><UploadPage /></ProtectedRoute>} />
            <Route path="/job-match" element={<ProtectedRoute><JobMatch /></ProtectedRoute>} />
            <Route path="/suggestions" element={<ProtectedRoute><Suggestions /></ProtectedRoute>} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AnimatePresence>


      {/* Footer */}
      <footer className="py-12 border-t border-border bg-glass mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight">Resume<span className="gradient-text">IQ</span></h1>
              </Link>
              <p className="text-gray-400 max-w-sm mb-8">
                The world's most advanced AI resume analyzer and job matching platform. Let your career take flight with intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/upload" className="hover:text-primary transition-colors">Analyzer</Link></li>
                <li><Link to="/job-match" className="hover:text-primary transition-colors">Job Match</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 ResumeIQ. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors text-inherit">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors text-inherit">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors text-inherit">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </ResumeProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}



export default App;
