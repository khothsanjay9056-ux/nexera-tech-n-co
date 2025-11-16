import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  services: string[]
  link: string
  delay?: string
}

export function ServiceCard({ icon, title, description, services, link, delay = '0s' }: ServiceCardProps) {
  return (
    <div 
      className="animate-fade-in-up h-full"
      style={{ animationDelay: delay }}
    >
      <Link href={link} className="block h-full">
        <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 hover:border-primary bg-card">
          <div className="flex flex-col h-full">
            <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-6 text-lg">{description}</p>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all text-lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}
