import { useState, useCallback, useRef } from 'react';
import { Upload, CheckCircle2, Loader2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UploadBox = ({ onUploadSuccess }) => {
    const [dragActive, setDragActive] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            startUpload(e.dataTransfer.files[0]);
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            startUpload(e.target.files[0]);
        }
    };

    const onBoxClick = () => {
        if (uploadStatus === 'idle') {
            fileInputRef.current?.click();
        }
    };

    const startUpload = (file) => {
        setUploadStatus('uploading');
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setUploadStatus('success');
                if (onUploadSuccess) onUploadSuccess(file);
            }
        }, 100);
    };

    return (
        <div
            onClick={onBoxClick}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative w-full h-full min-h-[400px] rounded-3xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-6 p-8 cursor-pointer ${
                dragActive ? 'border-primary bg-primary/10 scale-[1.02]' : 'border-white/10 glass'
            }`}
        >
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.docx"
                onChange={handleChange}
            />
            <AnimatePresence mode="wait">
                {uploadStatus === 'idle' && (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-gradient-main rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                            <Upload size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Drop your resume here</h3>
                        <p className="text-gray-400 text-sm mb-1">or click to browse</p>
                        <p className="text-gray-500 text-xs mt-4">Supports PDF and DOCX files</p>
                    </motion.div>
                )}

                {uploadStatus === 'uploading' && (
                    <motion.div
                        key="uploading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full px-8 text-center"
                    >
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <Loader2 size={96} className="text-primary animate-spin absolute inset-0 opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-bold">{progress}%</span>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-300">Processing your resume...</p>
                    </motion.div>
                )}

                {uploadStatus === 'success' && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                            <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Upload Complete!</h3>
                        <div className="flex items-center justify-center gap-2 text-sm glass px-4 py-2 rounded-lg border-white/5 mt-4">
                            <FileText size={16} className="text-primary" />
                            <span>Resume detected</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UploadBox;
