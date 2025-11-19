import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileSpreadsheet, Clock, Zap, CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Excel Automation Services Near Me | Nexera Technology - Excel Consultant Mississauga, GTA",
  description: "Nexera Technology: #1 Excel automation services near me. Excel automation expert in Mississauga, GTA. Stop wasting hours on manual data entry. We fix broken formulas, automate reports & save you 10+ hours weekly. Free Excel audit! Serving Mississauga, Brampton, Toronto, Ontario.",
  keywords: [
    'Nexera Excel services', 'Nexera automation',
    'Excel automation services near me', 'Excel consultant near me', 'Excel expert Mississauga',
    'Excel automation Mississauga', 'Excel consultant GTA', 'spreadsheet automation services',
    'Excel VBA macros', 'business spreadsheet help', 'Excel automation near me',
    'Excel services GTA', 'spreadsheet consultant', 'Excel programming services',
    'VBA developer near me', 'Excel automation consultant', 'spreadsheet optimization',
    'Excel report automation', 'Excel macro development', 'spreadsheet services Mississauga'
  ],
  alternates: {
    canonical: "/services/excel-automation",
  },
  openGraph: {
    title: 'Excel Automation Services Near Me | Nexera Technology',
    description: 'Excel automation expert in Mississauga. Fix spreadsheets, automate reports, save 10+ hours weekly.',
    url: '/services/excel-automation',
  },
};;

export default function ExcelAutomationPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Stop Drowning in Spreadsheets
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Save 10+ hours every week with Excel automation for your small business
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Free Excel Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Is Excel Killing Your Productivity?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Manual Data Entry Hell</h3>
                <p className="text-gray-600">
                  Spending hours copying data between files? Manual entry equals errors and wasted time.
                </p>
              </Card>
              <Card className="p-6">
                <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Broken Formulas</h3>
                <p className="text-gray-600">
                  One wrong click and your entire reporting system crashes with errors everywhere.
                </p>
              </Card>
              <Card className="p-6">
                <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Version Control Nightmare</h3>
                <p className="text-gray-600">
                  Multiple versions floating around, nobody knows which file is correct anymore.
                </p>
              </Card>
              <Card className="p-6">
                <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Repetitive Weekly Tasks</h3>
                <p className="text-gray-600">
                  Same report every Monday. Same cleanup every Friday. 3 hours wasted every week.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              How We Fix Your Excel Problems
            </h2>
            <div className="space-y-6">
              <Card className="p-8">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Automate Repetitive Tasks</h3>
                <p className="text-gray-600 mb-4">
                  Build custom VBA macros that handle your weekly tasks with one button click. That 3-hour Monday report now takes 30 seconds.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Fix Broken Spreadsheets</h3>
                <p className="text-gray-600 mb-4">
                  We audit your files, fix formulas, remove errors, and rebuild them properly. No more crashes.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Build Custom Templates</h3>
                <p className="text-gray-600 mb-4">
                  Create standardized templates with data validation and automated calculations for your team.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Connect Excel to Other Tools</h3>
                <p className="text-gray-600 mb-4">
                  Integrate with QuickBooks, Shopify, databases, and more for seamless data flow.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Free Excel Audit</h3>
                  <p className="text-gray-600">
                    Send us your files. We review them and send you a detailed report showing where you lose time.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Plan & Quote</h3>
                  <p className="text-gray-600">
                    We create a plan showing what we will automate, time savings, and exact costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Build & Test</h3>
                  <p className="text-gray-600">
                    We build your solution, test with your real data, and refine until perfect.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Training & Support</h3>
                  <p className="text-gray-600">
                    We train your team, provide documentation, and offer ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Real Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">10-15 hrs</div>
                <p className="text-gray-600">Saved per week</p>
              </Card>
              <Card className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-gray-600">Fewer errors</p>
              </Card>
              <Card className="p-8">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">3-6 mo</div>
                <p className="text-gray-600">ROI timeline</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Common Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <FileSpreadsheet className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Financial Reporting</h3>
                <p className="text-gray-600">
                  Auto-generate monthly statements from your accounting system
                </p>
              </Card>
              <Card className="p-6">
                <FileSpreadsheet className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Inventory Tracking</h3>
                <p className="text-gray-600">
                  Track stock levels and sync with your e-commerce platform
                </p>
              </Card>
              <Card className="p-6">
                <FileSpreadsheet className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Sales Dashboards</h3>
                <p className="text-gray-600">
                  Automated dashboards with forecasting and trend analysis
                </p>
              </Card>
              <Card className="p-6">
                <FileSpreadsheet className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Invoice Generators</h3>
                <p className="text-gray-600">
                  Professional invoices generated automatically from CRM data
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Stop Wasting Time on Excel?
            </h2>
            <p className="text-xl mb-8">
              Get your free Excel audit and see how much time you can save
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Excel Automation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nexera Technology",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "addressCountry": "CA"
              }
            },
            "areaServed": ["Mississauga", "GTA", "Ontario"],
          }),
        }}
      />
    </div>
  );
}
