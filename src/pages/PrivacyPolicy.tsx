import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechNova ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Company information for business inquiries</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (how you interact with our website)</li>
                  <li>Communications data (emails, contact form submissions)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for analytics, hosting, and other purposes. These services may have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy or our data practices, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  Email: privacy@technova.com<br />
                  Address: 123 Tech Boulevard, San Francisco, CA 94105
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
