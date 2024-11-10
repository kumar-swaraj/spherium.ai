import Button from '@/components/Button';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
  {
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: 'Free',
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
    features: [
      'Access to AI chatbot for natural language conversations',
      'Basic task automation for simple workflows',
      'Limited message history storage',
    ],
    color: 'amber',
    className: 'lg:py-12 lg:my-6',
  },
  {
    title: 'Premium',
    description: 'Advanced AI capabilities for enhanced productivity',
    price: 999,
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'secondary',
    features: [
      'All Basic features included',
      'Priority access to new AI features and updates',
      'Advanced automation tools for seamless task management',
      'Customizable chat templates for your specific workflows',
    ],
    color: 'violet',
    className: 'lg:py-18 lg:my-0',
  },
  {
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    buttonText: 'Contact Us',
    buttonVariant: 'primary',
    features: [
      'All Premium features included',
      'Dedicated account manager and priority customer support',
      'Enhanced security and compliance features for large teams',
      "Custom AI models tailored to your organization's needs",
      'API access for seamless integration with enterprise systems',
    ],
    color: 'teal',
    className: 'lg:py-12 lg:my-6',
  },
] satisfies {
  title: string;
  description: string;
  price: number | string | null;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  features: string[];
  color: string;
  className: string;
}[];

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
              Flexible plans for every need
            </h2>
            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    'mx-auto max-w-sm flex-1 rounded-3xl border border-[var(--color-border)] px-6 py-12',
                    tier.className
                  )}
                >
                  <h3
                    className={twMerge(
                      'text-4xl font-semibold',
                      tier.color === 'amber' && 'text-amber-400',
                      tier.color === 'teal' && 'text-teal-400',
                      tier.color === 'violet' && 'text-violet-400'
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === 'number' && (
                      <span className="align-top text-2xl font-semibold text-gray-200">
                        ₹
                      </span>
                    )}
                    <span className="text-5xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button className="mt-8" variant={tier.buttonVariant} block>
                    {tier.buttonText}
                  </Button>
                  <ul className="mt-8 flex flex-col gap-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-4 border-t border-[var(--color-border)] pt-4"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="size-6 flex-shrink-0 text-violet-400"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
