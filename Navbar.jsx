import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Upload Resume', href: '/upload' },
        { name: 'Job Match', href: '/job-match' },
        { name: 'Suggestions', href: '/suggestions' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-no-border py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center text-inherit">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Resume<span className="gradient-text">IQ</span></h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className="text-sm font-medium text-gray-400 hover:text-inherit transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-inherit"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="hidden md:inline text-sm text-gray-400">
                                {user.username || 'User'}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-500 transition-colors p-2"
                            >
                                <LogOut size={18} />
                                <span className="hidden md:inline">Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link
                                to="/login"
                                className="text-sm font-bold text-gray-400 hover:text-inherit transition-colors px-4 py-2"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="btn-primary text-sm !px-4 !py-2"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    <button
                        className="md:hidden p-2 text-gray-400 ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            className="text-lg font-medium text-gray-400 hover:text-inherit py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-white/5 my-2" />
                    {user ? (
                        <>
                            <div className="flex items-center gap-2 text-gray-400 py-2">
                                <UserIcon size={18} />
                                <span>{user.username || 'User'}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-red-400 font-bold py-2"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className="text-lg font-medium text-gray-400 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link 
                                to="/signup" 
                                className="btn-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
