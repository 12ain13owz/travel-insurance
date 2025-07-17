import { LucideIcon, Mail, MapPin, Phone } from 'lucide-react'

interface Contact {
  icon: LucideIcon
  title: string
  primary: string
  secondary: string
}

type ContactCardProps = Contact

const title = 'Get in Touch'
const contacts: Contact[] = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '1-800-TRAVEL-SAFE',
    secondary: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'support@travelguard.com',
    secondary: 'claims@travelguard.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: '123 Insurance Street',
    secondary: 'New York, NY 10001',
  },
]

function ContactCard({ icon: Icon, primary, secondary }: ContactCardProps) {
  return (
    <div className="text-center">
      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{primary}</p>
      <p className="text-gray-600">{secondary}</p>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact: Contact, index: number) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  )
}
