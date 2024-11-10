'use client';
import AlecWhitten from '@/assets/images/alec-whitten.jpg';
import AshwinSantiago from '@/assets/images/ashwin-santiago.jpg';
import MollieHall from '@/assets/images/mollie-hall.jpg';
import ReneWells from '@/assets/images/rene-wells.jpg';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    quote:
      "Spherium has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: 'Ashwin Santiago',
    title: 'Operations Manager',
    image: AshwinSantiago,
  },
  {
    quote:
      "Spherium integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: 'Alec Whitten',
    title: 'Lead Developer',
    image: AlecWhitten,
  },
  {
    quote:
      "Spherium's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: 'Rene Wells',
    title: 'Customer Success Manager',
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Spherium. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: 'Mollie Hall',
    title: 'Product Designer',
    image: MollieHall,
  },
];

const SELECTED_TESTIMONIAL_INDEX = 0;

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <div className="border-gradient relative flex flex-col items-center gap-12 rounded-3xl px-6 py-16 md:mx-10 md:flex-row md:px-10 lg:mx-20 lg:px-16 lg:py-24">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="absolute left-6 top-0 size-20 -translate-y-1/2 text-violet-400 md:left-10 lg:left-16"
              />
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={testimonial.name}>
                  {SELECTED_TESTIMONIAL_INDEX === index && (
                    <blockquote className="flex flex-col gap-12 lg:flex-row">
                      <p className="text-xl font-medium md:text-2xl">
                        {testimonial.quote}
                      </p>
                      <cite className="not-italic lg:text-right">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="size-28 max-w-none rounded-xl"
                        />
                        <div className="mt-4 font-bold">{testimonial.name}</div>
                        <div className="mt-2 text-xs text-gray-400">
                          {testimonial.title}
                        </div>
                      </cite>
                    </blockquote>
                  )}
                </React.Fragment>
              ))}
              <div className="flex justify-center gap-2 md:flex-col">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="relative isolate inline-flex size-6 items-center justify-center"
                  >
                    {SELECTED_TESTIMONIAL_INDEX === index && (
                      <div className="border-gradient absolute -z-10 size-full rounded-full"></div>
                    )}
                    <div className="size-1.5 rounded-full bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
