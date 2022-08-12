
import { motion } from 'framer-motion';

interface IScaleProps {
    children: React.ReactNode;
    translateX?: number[];
    translateY?: number[];
}

export function ScaleAntimation({ children, translateX = [], translateY = [] }: IScaleProps) {
    return (
        <motion.div
            animate={{
                translateY: translateY,
                translateX: translateX,
                scale: 1,

            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: 5,
                repeatDelay: 1
            }}
        >
            {children}
        </motion.div>
    )
}