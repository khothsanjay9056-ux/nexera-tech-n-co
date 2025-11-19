import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Database, Globe, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Nexera Technology - Data Services Near Me, Web Development Services & Automation | Mississauga",
  description: "Nexera Technology services: data services near me (Power BI, Excel automation, analytics), web development services near me (Shopify, custom websites), business automation near me (workflow optimization, process automation). Serving Mississauga, Brampton, Toronto, GTA, Ontario. Free consultation!",
  keywords: [
    'Nexera services', 'Nexera Technology services',
    'data services near me', 'web development services near me', 'automation services near me',
    'Power BI services Mississauga', 'Excel automation services GTA', 'dashboard development',
    'Shopify development services', 'ecommerce services near me', 'website development GTA',
    'business automation services', 'workflow automation Ontario', 'IT services Mississauga',
    'data analytics services', 'web design services', 'technology services near me'
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: 'Nexera Services | Data, Web Development & Automation',
    description: 'Expert data services, web development services, and business automation near you in Mississauga & GTA.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Three core pillars that transform businesses from overwhelmed to optimized. We don&apos;t just provide technology—we deliver strategic clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={<Database className="h-12 w-12" />}
            title="Data & Analytics"
            description="Transform messy spreadsheets into strategic insights. Custom Power BI dashboards that give you clarity on your business performance."
            services={['Power BI Dashboards', 'Data Visualization', 'Business Intelligence']}
            link="/services/power-bi-dashboards"
          />
          <ServiceCard
            icon={<Zap className="h-12 w-12" />}
            title="Business Automation"
            description="Eliminate repetitive tasks and human error. Automated workflows that give you time back to focus on growth."
            services={['Excel Automation', 'Workflow Automation', 'Process Optimization']}
            link="/services/excel-automation"
          />
          <ServiceCard
            icon={<Globe className="h-12 w-12" />}
            title="Web & eCommerce"
            description="Build high-converting Shopify stores and custom web applications. Your digital storefront optimized for global sales."
            services={['Shopify Stores', 'Custom Websites', 'eCommerce Solutions']}
            link="/services/web-ecommerce"
          />
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Nexera?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Simplicity</div>
              <p className="text-gray-600">
                We make sophisticated technology simple and accessible for your team
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Transparency</div>
              <p className="text-gray-600">
                Clear communication, honest timelines, and no hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Punctuality</div>
              <p className="text-gray-600">
                We deliver on time, every time. Your deadlines are our priority
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation and we&apos;ll help you identify the right solution.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
