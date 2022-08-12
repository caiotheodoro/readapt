import { motion } from 'framer-motion';

interface IFadeInProps {
    children: React.ReactNode;
}

export function FadeInAnimation({ children }: IFadeInProps) {



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}