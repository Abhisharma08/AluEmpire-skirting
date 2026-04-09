import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const product = {
  name: 'Aluminium Skirting Systems',
  description:
    'Built for modern interiors, these skirting profiles protect wall edges while creating a crisp, refined finish.',
  points: [
    'Suitable for homes, offices, and commercial spaces',
    'Resistant to moisture, corrosion, and everyday wear',
    'Easy to clean and simple to maintain over time',
    'Designed to complement contemporary wall and floor detailing',
  ],
  image:
    'https://res.cloudinary.com/ddqqlfsjp/image/upload/q_auto/f_auto/v1775728668/Modern_brushed_aluminum_skirting_detail_c6maok.png',
  aiHint: 'Aluminium Skirting',
};

export default function ProductTypesSection() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-secondary">
      <div className="site-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">
            {product.name}
          </h2>
        </div>

        <Card className="overflow-hidden border-border/20 bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-full">
              <Image
                src={product.image}
                alt={product.name}
                data-ai-hint={product.aiHint}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={75}
              />
            </div>

            <CardContent className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-lg leading-8 text-muted-foreground">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground sm:text-base">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild className="w-full sm:w-auto">
                  <a href="#lead-form">Enquire Now</a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
