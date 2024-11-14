'use client';
import underLineImg from '@/assets/images/underline.svg?url';
import Button from '@/components/Button';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useSpring, useTransform, motion } from 'framer-motion';

export const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);

  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <Orbit className="absolute-center size-[200px]" />
              <Orbit className="absolute-center size-[350px]" />
              <Orbit className="absolute-center size-[500px]" />
              <Orbit className="absolute-center size-[650px]" />
              <Orbit className="absolute-center size-[800px]" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                <Planet
                  size="lg"
                  mainColor="violet"
                  className="-translate-x-[200px] translate-y-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateLargeX, y: translateLargeY }}>
                <Planet
                  size="lg"
                  mainColor="violet"
                  className="-translate-y-[200px] translate-x-[200px] -rotate-135"
                />
              </motion.div>
            </div>

            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateMediumX, y: translateMediumY }}>
                <Planet
                  size="md"
                  mainColor="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateMediumX, y: translateMediumY }}>
                <Planet
                  size="md"
                  mainColor="teal"
                  className="-translate-y-[100px] translate-x-[500px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                <Planet
                  size="sm"
                  mainColor="fuchsia"
                  className="-translate-x-[400px] -translate-y-[250px] rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
                <Planet
                  size="sm"
                  mainColor="fuchsia"
                  className="translate-x-[400px] translate-y-[250px] -rotate-45"
                />
              </motion.div>
            </div>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
              Join the AI Revolution with{' '}
              <span className="relative isolate">
                <span>Spherium</span>
                <span
                  className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underLineImg.src})`,
                    maskSize: 'contain',
                    maskPosition: 'top',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xl">
              Experience the transformative power of AI with Spherium. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform.
            </p>
            <div className="mt-10 flex justify-center">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
