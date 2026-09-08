import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlowingEffect } from './ui/glowing-effect';

const ScoreCard = ({ title, score, icon: Icon, colorClass = "from-primary to-secondary", href }) => {
    const content = (
        <div className="relative glass p-6 rounded-xl overflow-hidden bg-background h-full">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-[0.03] blur-2xl group-hover:opacity-10 transition-opacity`} />

            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                    <span className="text-sm text-gray-400 block mb-1">{title}</span>
                    <div className="text-3xl font-bold">{score}%</div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${colorClass}`}
                    />
                </div>
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-gray-500">
                    <span>Poor</span>
                    <span>Great</span>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl border border-white/5 p-1 group h-full"
        >
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
            />
            {href ? (
                <Link to={href} className="block h-full">
                    {content}
                </Link>
            ) : content}
        </motion.div>
    );
};

export default ScoreCard;
