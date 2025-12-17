import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does TechNova offer?',
          a: 'We offer a comprehensive range of IT services including web development, mobile app development, UI/UX design, digital marketing, and cloud & DevOps solutions. Our team of experts can handle projects of any size and complexity.',
        },
        {
          q: 'How long has TechNova been in business?',
          a: 'TechNova was founded in 2018 and has since grown to become a leading IT services provider with over 500 successful projects delivered to clients worldwide.',
        },
        {
          q: 'Where are you located?',
          a: 'Our headquarters is in San Francisco, CA, but we have team members and offices across multiple countries. We work with clients globally and can accommodate different time zones.',
        },
      ],
    },
    {
      category: 'Projects & Process',
      questions: [
        {
          q: 'How do you approach new projects?',
          a: 'We follow an agile methodology that includes discovery, planning, design, development, testing, and deployment phases. We maintain close communication with clients throughout the process and provide regular updates.',
        },
        {
          q: 'How long does a typical project take?',
          a: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. We provide detailed timelines during the proposal phase.',
        },
        {
          q: 'Do you provide ongoing support after project completion?',
          a: 'Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly. This includes bug fixes, updates, security patches, and feature enhancements.',
        },
      ],
    },
    {
      category: 'Pricing & Payments',
      questions: [
        {
          q: 'How do you price your services?',
          a: 'Our pricing depends on the project scope, complexity, and timeline. We offer both fixed-price quotes for well-defined projects and time-and-materials billing for more flexible engagements. Contact us for a custom quote.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we typically structure payments in milestones tied to project deliverables. This usually includes an upfront deposit, progress payments, and a final payment upon completion.',
        },
        {
          q: 'Is there a minimum project size?',
          a: 'While we can handle projects of various sizes, we generally work on projects with budgets starting from $10,000. For smaller projects, we can recommend trusted partners.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What technologies do you work with?',
          a: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, and many more. We select the best tech stack based on your specific project requirements.',
        },
        {
          q: 'Do you build custom solutions or use templates?',
          a: 'We primarily build custom solutions tailored to your specific needs. While we may use frameworks and libraries to accelerate development, the final product is always uniquely designed for your business.',
        },
        {
          q: 'Can you work with our existing systems?',
          a: 'Absolutely. We have extensive experience integrating with existing systems, APIs, and third-party services. We can also help modernize legacy systems while ensuring business continuity.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob" />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we work
            with clients to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-6 gradient-text">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${catIndex}-${faqIndex}`}
                    className="glass rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-heading font-semibold">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our team is here to help.
            Reach out and we'll get back to you promptly.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
