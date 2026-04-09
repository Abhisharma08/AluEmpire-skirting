import { Gem, Leaf, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const reasons = [
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: 'Enhanced Wall Protection',
        description: 'Protects walls from scratches, dents, and daily wear, keeping interiors looking clean, polished, and well-maintained.',
    },
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: 'Durable & Long-Lasting Build',
        description: 'Made from high-quality aluminium, resistant to corrosion, moisture, and impact, ensuring years of reliable performance.',
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: 'Low Maintenance & Easy to Clean',
        description: 'Smooth surface prevents dust buildup and makes cleaning effortless, ideal for both homes and commercial spaces.',
    },
    {
        icon: <Leaf className="w-8 h-8 text-primary" />,
        title: 'Modern & Minimal Aesthetic',
        description: 'Designed to deliver a sleek, seamless finish perfectly complementing contemporary interiors with a refined edge.',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-20 sm:py-32">
            <div className="site-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">
                        Why Choose Aluminium Skirting Systems from Alu Empire?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {reasons.map((reason) => (
                     <Card key={reason.title} className="text-center border-t-4 border-primary bg-secondary/30">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                                {reason.icon}
                            </div>
                            <CardTitle className="font-body text-xl">
                                {reason.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-muted-foreground">
                                {reason.description}
                            </p>
                        </CardContent>
                     </Card>
                   ))}
                </div>
            </div>
        </section>
    )
}