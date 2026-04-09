import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Aluminium Skirting Systems',
    description:
      'Upgrade your interiors with strong, stylish, and long-lasting skirting solutions.',
    points: [
      'Weather-resistant and low maintenance',
      'Durable and impact-resistant',
      'Ideal for homes, offices, and commercial spaces',
      'Clean finish with modern design',
    ],
    image:
      'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753953824/WhatsApp_Image_2025-07-31_at_2.51.03_PM_1_cbmg1g.jpg',
    aiHint: 'Aluminium Skirting',
  },
];

const features = [
  {
    title: 'Enhanced Wall Protection',
    desc: 'Protects walls from scratches, dents, and daily wear, keeping interiors looking clean, polished, and well-maintained.',
  },
  {
    title: 'Durable & Long-Lasting Build',
    desc: 'Made from high-quality aluminium, resistant to corrosion, moisture, and impact, ensuring years of reliable performance.',
  },
  {
    title: 'Low Maintenance & Easy to Clean',
    desc: 'Smooth surface prevents dust buildup and makes cleaning effortless, ideal for both homes and commercial spaces.',
  },
  {
    title: 'Modern & Minimal Aesthetic',
    desc: 'Designed to deliver a sleek, seamless finish perfectly complementing contemporary interiors with a refined edge.',
  },
];

export default function ProductTypesSection() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-secondary">
      <div className="site-container">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">
            Aluminium Skirting Systems
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Upgrade your interiors with strong, stylish, and long-lasting skirting solutions.
          </p>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden bg-background border-border/20 flex flex-col">

              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-body text-2xl text-primary">
                  {product.name}
                </CardTitle>

                <p className="mt-2 text-muted-foreground">
                  {product.description}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                  {product.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Button asChild className="w-full">
                    <a href="#lead-form">Enquire Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((item, index) => (
              <Card key={index} className="bg-background border-border/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}