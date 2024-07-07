import React, { Suspense } from 'react';
import { Card } from '@/components/card';
import HomeIcon from '@/assets/svgs/home.svg';
import CircleAdd from '@/assets/svgs/circle-add.svg';
import { LastContent } from '@/modules/landing/last-content';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {

    return (
        <Suspense fallback={null}>
            <AnimatePresence>
                <section className="landing-page h-screen w-full">
                    <div>
                        {/* middle part */}
                        <article className="w-2xl max-w-4xl mx-auto py-20 grid grid-cols-3 grid-rows-2 gap-8 place-items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.75, delay: 0.4 }}
                            >
                                <Card className="bg-[#252525]/50 backdrop-blur-xl">
                                    <div className="w-48 h-40 flex flex-col items-center justify-center">
                                        <p>icon</p>
                                        <p className="font-light">Text text text text</p>
                                    </div>
                                </Card>
                            </motion.div>
                            
                            {/* main description card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', bounce: 0.25, duration: 1, delay: 0.4 }}
                            >
                                <Card>
                                    <div className="w-48 h-40 flex items-center justify-between">
                                        <p>Text</p>
                                        <p>icon</p>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', bounce: 0.25, duration: 1 }}
                            >
                                <Card>
                                    <div className="w-48 h-40 flex items-center justify-between">
                                        <p>Text</p>
                                        <p>icon</p>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -100  }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: 'spring', bounce: 0.25, duration: 1, delay: 0.4 }}
                            >
                                <Card>
                                    <div className="w-48 h-40 flex items-center justify-between">
                                        <p>Text</p>
                                        <p>icon</p>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.75, delay: 0.4 }}
                            >
                                <Card className="-mt-4 bg-[#252525]/75 backdrop-blur-xl">
                                    <div className="w-48 h-36 flex flex-col items-center justify-center gap-4">
                                        <p>Text</p>
                                        <p>icon gitna</p>
                                        <p>isa pa</p>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* last content card */}
                            <LastContent />
                        </article>

                        {/* bottom part */}
                        <motion.article 
                            className="w-3xl max-w-6xl mx-auto flex items-center text-center justify-between"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', bounce: 0.1, duration: 1.25, delay: 0.75 }}
                        >
                            <div className="bg-[#252525]/50 backdrop-blur-lg group flex gap-2 text-white font-light px-8 py-3 rounded-3xl cursor-pointer">
                                <CircleAdd width={28} height={28} className="-mt-[0.1rem] group-hover:scale-110 transition-transform duration-150" />
                                <p>Text text text text</p>
                            </div>

                            <div className="bg-[#252525] group p-3 rounded-3xl cursor-pointer">
                                <HomeIcon width={28} height={28} className="text-white group-hover:scale-110 transition-transform duration-150" />
                            </div>

                            <div className="bg-[#252525] group flex gap-2 text-white font-light px-8 py-3 rounded-3xl cursor-pointer">
                                <p>Start new content</p>
                                <div>
                                    <CircleAdd width={28} height={28} className="-mt-[0.1rem] group-hover:scale-110 transition-transform duration-150" />
                                </div>
                            </div>
                        </motion.article>
                    </div>
                </section>
            </AnimatePresence>
        </Suspense>
    );
}

export default Home;