import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '@/components/card';

export const LastContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.25, duration: 1, delay: 0.3 }}
        >
            <Card className="-mt-8">
                <div className="w-44 h-32 flex flex-col justify-between">
                    <div className="">
                        <p>Latest content</p>
                        <p className="text-xs opacity-80">July 6, 2024 at 12:00 PM</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p>icon 1</p>
                        <p>icon 2</p>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}
