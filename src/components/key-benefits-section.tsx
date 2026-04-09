import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Layers, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: 'Recessed Aluminium Skirting',
    description:
      'Perfect for premium interiors, offices, and modern homes. Installed flush within walls for a seamless, minimalistic look.',
  },
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: 'Surface Aluminium Skirting',
    description:
      'Easy-to-install skirting ideal for renovations and commercial spaces, offering protection with a refined, contemporary finish.',
  },
];

export default function SkirtingSolutionsSection() {
  return (
    <section id="solutions" className="py-20 sm:py-32 bg-muted/30">
      <div className="site-container">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-body text-primary">
            Explore Our Skirting Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
          
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((item, index) => (
            <Card
              key={index}
              className="group border-border/20 hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="p-8">
                
                <div className="flex items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-xl font-body">
                    {item.title}
                  </CardTitle>
                </div>

                <CardDescription className="mt-6 text-base text-muted-foreground">
                  {item.description}
                </CardDescription>

                {/* CTA Button */}
                <div className="mt-6">
                  <Button asChild className="rounded-full px-6 group-hover:scale-105 transition-transform">
                    <a href="#lead-form">Enquire Now</a>
                  </Button>
                </div>

              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
