import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary">
      <div className="site-container">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">
            Ready to Upgrade Your Home?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Connect with Alu Empire and discover how our uPVC doors and windows can redefine your space.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#lead-form">Request a Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="#lead-form">Download Product Brochure</a>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
