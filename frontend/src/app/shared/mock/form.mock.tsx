import { Briefcase, Users } from 'lucide-react'

export const mockPersonalInfo = [
  {
    name: 'Sarah Johnson',
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    data: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 1234567890',
      dateOfBirth: new Date('1990-01-01').toString(),
      nationality: 'US',
      passportNumber: 'US123456789',
      emergencyContact: {
        name: 'John Johnson',
        phone: '+1 5559876543',
        relationship: 'spouse',
      },
    },
  },
  {
    name: 'Michael Chen',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-600',
    data: {
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'michael.chen@email.com',
      phone: '+1 5552345678',
      dateOfBirth: new Date('1995-05-15').toString(),
      nationality: 'US',
      passportNumber: 'US987654321',
      emergencyContact: {
        name: 'Lisa Chen',
        phone: '+1 5558765432',
        relationship: 'parent',
      },
    },
  },
  {
    name: 'Narin Kaewmala',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
    data: {
      firstName: 'Narin',
      lastName: 'Kaewmala',
      email: 'narin.wongchai@email.com',
      phone: '+66 0812345678',
      dateOfBirth: new Date('2001-10-16').toString(),
      nationality: 'TH',
      passportNumber: 'AA1234567',
      emergencyContact: {
        name: 'Naree Kaewmala',
        phone: '+66 0898765432',
        relationship: 'child',
      },
    },
  },
]
