import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  ShoppingCart, 
  Smartphone, 
  TrendingUp, 
  Shield,
  CheckCircle2,
  Clock,
  Palette,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services Near Me | Nexera Technology - Shopify Expert Mississauga, GTA",
  description: "Nexera Technology: #1 web development services near me. Expert Shopify developer in Mississauga, GTA. Custom websites, Shopify stores, eCommerce solutions. Professional web design & development. Free consultation! Serving Mississauga, Brampton, Toronto, Ontario.",
  keywords: [
    'Nexera web development', 'Nexera Shopify',
    'web development services near me', 'web developer near me', 'website developer Mississauga',
    'Shopify developer near me', 'Shopify expert Mississauga', 'Shopify services GTA',
    'ecommerce developer near me', 'ecommerce services Mississauga', 'online store development',
    'custom website development', 'web design services near me', 'website design Mississauga',
    'Shopify store setup', 'ecommerce website development', 'web development GTA',
    'website services Ontario', 'Shopify consultant near me', 'web design GTA'
  ],
  alternates: {
    canonical: "/services/web-ecommerce",
  },
  openGraph: {
    title: "Web Development & Shopify Services Near Me | Nexera Technology",
    description: "Expert web development and Shopify services in Mississauga, GTA. Custom websites and eCommerce solutions.",
    url: "/services/web-ecommerce",
    type: "website",
  },
};

export default function WebEcommercePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your Business Online in Days, Not Months
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional Shopify stores and websites that actually convert. No technical skills required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/projects">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Selling Online Shouldn&apos;t Be This Hard
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Taking Forever to Launch</h3>
                <p className="text-gray-600">
                  Web agencies quote 3-6 months for a basic website. You need to start selling NOW.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold mb-3">Overpriced &amp; Over-Complicated</h3>
                <p className="text-gray-600">
                  $10K+ quotes for features you don&apos;t need. Why pay for complexity when simple works?
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🤯</div>
                <h3 className="text-xl font-bold mb-3">Technical Overwhelm</h3>
                <p className="text-gray-600">
                  Hosting, SSL certificates, payment processors, security. It&apos;s exhausting.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Approach: Fast, Affordable, Effective
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <ShoppingCart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shopify Store Development</h3>
                <p className="text-gray-600 mb-4">
                  Launch a professional online store in 7-14 days. We handle everything: theme selection, product setup, payment integration, shipping configuration, and training.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom theme design &amp; branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Product upload &amp; categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Payment gateway setup (Shopify Payments, PayPal, Stripe)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Shipping zones &amp; rates configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Training session included</span>
                  </li>
                </ul>
              </div>

              <div>
                <Palette className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Custom Website Development</h3>
                <p className="text-gray-600 mb-4">
                  Need something beyond eCommerce? We build custom websites using modern frameworks (Next.js, React) for blazing-fast performance and SEO.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom design matching your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Content management system (CMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Contact forms &amp; lead capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Google Analytics integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Lightning-fast page speed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hosting setup &amp; SSL certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Ongoing maintenance available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">SEO &amp; Performance Optimization</h3>
                <p className="text-gray-600 mb-4">
                  A slow, unfindable website is useless. We optimize for speed, search engines, and conversions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Technical SEO audit &amp; fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Page speed optimization (Google PageSpeed 90+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Mobile responsiveness fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Schema markup implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Image optimization &amp; compression</span>
                  </li>
                </ul>
              </div>

              <div>
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Conversion Rate Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Traffic is worthless if visitors don&apos;t convert. We optimize your site to turn browsers into buyers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>A/B testing &amp; analytics setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Checkout flow optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Abandoned cart recovery emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Product page improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Trust badge &amp; social proof</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Businesses Choose Nexera
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Shopify stores in 7-14 days. Custom websites in 3-4 weeks. No 6-month wait times.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fixed Pricing</h3>
                <p className="text-gray-600">
                  No surprises. Clear quotes upfront. Unlimited revisions during development phase.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
                <p className="text-gray-600">
                  70% of shoppers use mobile. Every site we build is optimized for phone, tablet, and desktop.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Shopify Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$2,500</div>
                <p className="text-gray-600 mb-6">Perfect for new online stores</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Theme customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Up to 50 products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Payment &amp; shipping setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Basic SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>1-hour training session</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>

              <Card className="p-8 border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Shopify Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$4,500</div>
                <p className="text-gray-600 mb-6">For growing businesses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom theme design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Unlimited products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Email marketing integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>2 hours training + documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>30 days post-launch support</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Custom Website</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$3,500+</div>
                <p className="text-gray-600 mb-6">Fully custom solutions</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Fully custom design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Advanced SEO &amp; performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hosting setup included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Ongoing support available</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Sell Online?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get a free consultation and quote. No obligation. We&apos;ll show you exactly what&apos;s possible for your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Start Your Project Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
