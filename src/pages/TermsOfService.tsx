import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            Terms of Service
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
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using TechNova's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechNova provides IT consulting, web development, mobile app development, UI/UX design, digital marketing, and cloud services. The specific scope of services will be defined in individual project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for feedback in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Ensure you have rights to any content you provide</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive ownership rights to custom work created specifically for their project. TechNova retains rights to pre-existing materials, frameworks, and general knowledge. We may showcase completed work in our portfolio unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms are outlined in individual project agreements. Generally, we require a deposit before starting work, with remaining payments tied to project milestones. Late payments may incur additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechNova's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages. We do not guarantee specific results or outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice. Upon termination, the client is responsible for payment of work completed. We will provide all completed deliverables and any necessary transition support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">8. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  Email: legal@technova.com<br />
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

export default TermsOfService;
