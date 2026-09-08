import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload, Play } from 'lucide-react';
import { HeroGeometric } from './ui/shape-landing-hero';

const HeroSection = () => {
    return (
        <HeroGeometric
            badge="ResumeIQ: AI-Powered Intelligence"
            title1="AI Resume"
            title2="Analyzer"
        >
            <div className="container mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Improve your resume with AI insights. Upload, analyze, and match your skills with job descriptions to land your dream job.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/upload" className="btn-primary flex items-center gap-2 group">
                        <Upload size={20} className="group-hover:-translate-y-1 transition-transform" />
                        Upload Resume
                    </Link>
                    <Link to="/dashboard" className="btn-secondary flex items-center gap-2 group">
                        <Play size={20} className="group-hover:translate-x-1 transition-transform" />
                        View Demo
                    </Link>
                </motion.div>

                {/* Hero Image Mockup Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative max-w-5xl mx-auto"
                >
                    <div className="glass rounded-2xl p-4 md:p-8 shadow-2xl shadow-black/50 overflow-hidden">
                        <div className="aspect-video rounded-xl bg-gray-900/50 flex items-center justify-center border border-white/5 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            {/* Dummy Dashboard UI Preview */}
                            <div className="w-full h-full p-6 flex flex-col gap-4 overflow-hidden select-none">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3 text-left">
                                        <div className="w-8 h-8 rounded-lg bg-primary/20 animate-pulse" />
                                        <div className="w-24 h-3 rounded-full bg-white/10" />
                                    </div>
                                    <div className="w-16 h-8 rounded-full bg-white/5" />
                                </div>
                                
                                <div className="grid grid-cols-3 gap-4 h-32">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col gap-2">
                                            <div className="w-6 h-6 rounded-md bg-secondary/20" />
                                            <div className="w-12 h-2 rounded-full bg-white/5" />
                                            <div className="w-8 h-4 rounded-full bg-white/10 mt-auto" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-6 flex flex-col gap-4 text-left">
                                    <div className="w-1/3 h-3 rounded-full bg-white/10" />
                                    <div className="space-y-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                                <div className="flex-1 h-2 rounded-full bg-white/5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Animated Streaks */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse-slow" />
                        </div>
                    </div>

                    {/* Accent Glow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50" />
                </motion.div>
            </div>
        </HeroGeometric>
    );
};
export default HeroSection;
