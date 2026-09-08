import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TextPreview = ({ text }) => {
    return (
        <div className="glass rounded-3xl h-full min-h-[500px] flex flex-col overflow-hidden border-white/5">
            <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                <h3 className="text-xl font-bold">Extracted Resume Text</h3>
                {text && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                        Analysis ready
                    </span>
                )}
            </div>

            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
                {text ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gray-400 text-sm font-mono whitespace-pre-wrap leading-relaxed"
                    >
                        {text}
                    </motion.div>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                            <FileText size={32} />
                        </div>
                        <p className="text-sm">Upload a resume to see preview</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextPreview;
