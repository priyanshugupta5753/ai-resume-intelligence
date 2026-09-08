import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const SuggestionCard = ({ original, improved }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl overflow-hidden border-white/5"
        >
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
                <div className="p-6 bg-background/50">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Original</div>
                    <p className="text-gray-400 text-sm italic leading-relaxed">
                        "{original}"
                    </p>
                </div>
                <div className="p-6 bg-primary/5 relative">
                    <div className="absolute top-6 right-6 text-primary">
                        <Sparkles size={16} />
                    </div>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">AI Improved</div>
                    <p className="text-white text-sm font-medium leading-relaxed">
                        "{improved}"
                    </p>
                </div>
            </div>
            <div className="px-6 py-4 glass border-t border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold uppercase">Impact +40%</span>
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">ATS Friendly</span>
                </div>
                <button className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Apply Change <ArrowRight size={14} />
                </button>
            </div>
        </motion.div>
    );
};

export default SuggestionCard;
