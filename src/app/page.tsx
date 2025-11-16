import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, ShoppingCart, Zap, CheckCircle } from 'lucide-react'
import { HeroRotator } from '@/components/HeroRotator'
import { BeforeAfter } from '@/components/BeforeAfter'
import { ServiceCard } from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Home | Small Business Growth Solutions in Mississauga & GTA',
  description: 'We help small businesses get online, look professional, and stop losing customers to competitors. Expert Excel automation, Power BI dashboards, Shopify stores, and workflow automation services in Mississauga, GTA, Ontario, and across Canada.',
  keywords: ['small business technology Mississauga', 'business automation GTA', 'get business online', 'Excel automation consultant', 'Power BI expert Ontario', 'Shopify developer Canada'],
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Interactive Demos */}
      <HeroRotator />

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Small Businesses Helped</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Hours Saved Annually</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">GTA</div>
              <div className="text-gray-600">Local & Global Service</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Interactive Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From Chaos to Clarity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform messy spreadsheets and manual processes into 
              beautiful, automated systems that save you hours every week.
            </p>
          </div>
          
          <BeforeAfter />
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Help You Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful ways to transform your small business and compete with the big players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BarChart3 className="h-12 w-12" />}
              title="Data & Analytics"
              description="Turn your messy data into clear, actionable insights with custom dashboards and automated reports."
              services={[
                'Custom Power BI Dashboards',
                'Excel Automation & Consulting',
                'Automated Monthly Reporting',
              ]}
              link="/services/power-bi-dashboards"
              delay="0.1s"
            />

            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12" />}
              title="Web & eCommerce"
              description="Get your business online fast with professional websites and Shopify stores that actually convert."
              services={[
                'Shopify Store Setup & Design',
                'Custom Website Development',
                'Performance & SEO Optimization',
              ]}
              link="/services/web-ecommerce"
              delay="0.2s"
            />

            <ServiceCard
              icon={<Zap className="h-12 w-12" />}
              title="Business Automation"
              description="Stop wasting time on repetitive tasks. Automate your workflows and focus on growing your business."
              services={[
                'Workflow Automation',
                'Inventory & Order Management',
                'CRM & Email Integration',
              ]}
              link="/services/excel-automation"
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Are You Struggling With...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Spending hours on manual data entry every week',
                'Losing sales because your website looks outdated',
                'Missing important business insights hidden in spreadsheets',
                'Customers going to competitors with better online presence',
                'Wasting time on repetitive tasks that could be automated',
                'Not knowing which products or services are actually profitable',
              ].map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl mb-6">
                You're not alone. These are the exact problems we solve for small businesses every day.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Let's Fix This Together <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving Mississauga & the GTA
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a local technology consultancy that understands the unique challenges 
              of small businesses in Ontario. Whether you're in Mississauga, Toronto, 
              Brampton, or anywhere in the GTA, we're here to help you compete and grow.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              <strong>Remote Services Available:</strong> We also serve clients across Canada 
              and internationally, bringing the same level of expertise and personalized service 
              to businesses worldwide.
            </p>
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation and discover how we can help your business 
            get online, look professional, and start growing today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/contact">
              Book Your Free Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
