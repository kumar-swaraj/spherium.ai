'use client';
import Loader from '@/assets/images/loader-animated.svg';
import robotImg from '@/assets/images/robot.jpg';
import underlineImg from '@/assets/images/underline.svg?url';
import Button from '@/components/Button';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { useMousePosition } from '@/hooks/useMousePosition';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,var(--color-indigo-900)_75%,transparent)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-center text-4xl font-semibold leading-tight text-gray-100 md:text-5xl lg:text-6xl">
              Unlock the Future of AI Conversations with{' '}
              <span className="relative">
                <span>Spherium</span>
                <span
                  className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImg.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg md:text-xl">
              Harness the power of AI with Spherium. Elevate your productivity
              and streamline your workflow with our cutting-edge AI chat
              platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-8">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate mx-auto max-w-5xl">
              <div className="absolute left-1/2 top-0">
                <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                  <Planet
                    size="lg"
                    mainColor="violet"
                    className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                  <Planet
                    size="lg"
                    mainColor="violet"
                    className="-translate-y-[188px] translate-x-[334px] -rotate-135"
                  />
                </motion.div>
                <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                  <Planet
                    size="sm"
                    mainColor="fuchsia"
                    className="-translate-x-[508px] -translate-y-[372px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    mainColor="teal"
                    className="-translate-y-[342px] translate-x-[488px] -rotate-135"
                  />
                </motion.div>
              </div>
              <div className="absolute left-0 top-[30%] z-10 hidden -translate-x-10 lg:block">
                <motion.div
                  className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                  style={{ y: transformedY }}
                >
                  <div>
                    Can you show me our total sales charts for the last quarter?
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute right-0 top-[50%] z-10 hidden translate-x-10 lg:block">
                <motion.div
                  className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                  style={{ y: transformedY }}
                >
                  <div>
                    <strong>AI:</strong> I have the sales data for the last
                    quarter right here.
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    Just now
                  </div>
                </motion.div>
              </div>
              <div className="border-gradient relative mt-20 overflow-hidden rounded-2xl">
                <Image src={robotImg} alt="Robot Image" priority />
                <div className="absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-4 md:bottom-4 lg:bottom-10">
                  <div className="flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4 py-2">
                    <Loader className="text-violet-400" />
                    <div className="text-xl font-semibold text-gray-100">
                      AI is generating
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
