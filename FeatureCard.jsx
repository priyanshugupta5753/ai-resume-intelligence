import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlowingEffect } from './ui/glowing-effect';

const FeatureCard = ({ icon: Icon, title, description, href }) => {
    const content = (
        <div className="relative h-full glass p-8 rounded-xl bg-gradient-surface overflow-hidden">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                <Icon size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );

    return (
        <motion.div
            whileHover={{ y: href ? -10 : -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-full rounded-2xl border border-white/5 p-1"
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

export default FeatureCard;
