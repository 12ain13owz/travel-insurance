'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { TravelDetails } from '@/lib/types';
import { Plane, ArrowRight, ArrowLeft, MapPin, Calendar, Users, Zap, Globe, Briefcase, GraduationCap } from 'lucide-react';

interface TravelDetailsFormProps {
  data: Partial<TravelDetails>;
  onChange: (data: Partial<TravelDetails>) => void;
  onNext: () => void;
  onPrev: () => void;
}

// Mock travel scenarios
const mockTravelScenarios = [
  {
    name: "Europe Vacation",
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
    data: {
      destination: "europe",
      departureDate: new Date("2024-06-15"),
      returnDate: new Date("2024-06-29"),
      tripPurpose: "leisure",
      numberOfTravelers: 2,
      tripDuration: 14
    }
  },
  {
    name: "Business Trip Asia",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-600",
    data: {
      destination: "asia",
      departureDate: new Date("2024-04-10"),
      returnDate: new Date("2024-04-17"),
      tripPurpose: "business",
      numberOfTravelers: 1,
      tripDuration: 7
    }
  },
  {
    name: "Family Adventure",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    data: {
      destination: "americas",
      departureDate: new Date("2024-07-20"),
      returnDate: new Date("2024-08-05"),
      tripPurpose: "leisure",
      numberOfTravelers: 4,
      tripDuration: 16
    }
  },
  {
    name: "Study Exchange",
    icon: GraduationCap,
    color: "from-orange-500 to-red-600",
    data: {
      destination: "oceania",
      departureDate: new Date("2024-08-01"),
      returnDate: new Date("2024-12-15"),
      tripPurpose: "study",
      numberOfTravelers: 1,
      tripDuration: 136
    }
  }
];

export function TravelDetailsForm({ data, onChange, onNext, onPrev }: TravelDetailsFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof TravelDetails, value: any) => {
    onChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const fillMockData = (mockData: Partial<TravelDetails>) => {
    onChange({ ...data, ...mockData });
    setErrors({});
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!data.destination) newErrors.destination = 'Destination is required';
    if (!data.departureDate) newErrors.departureDate = 'Departure date is required';
    if (!data.returnDate) newErrors.returnDate = 'Return date is required';
    if (!data.tripPurpose) newErrors.tripPurpose = 'Trip purpose is required';
    if (!data.numberOfTravelers) newErrors.numberOfTravelers = 'Number of travelers is required';

    // Validate date logic
    if (data.departureDate && data.returnDate) {
      if (data.returnDate <= data.departureDate) {
        newErrors.returnDate = 'Return date must be after departure date';
      }
      
      // Check if departure date is in the past
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (data.departureDate < today) {
        newErrors.departureDate = 'Departure date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      // Calculate trip duration
      if (data.departureDate && data.returnDate) {
        const duration = Math.ceil((data.returnDate.getTime() - data.departureDate.getTime()) / (1000 * 60 * 60 * 24));
        onChange({ ...data, tripDuration: duration });
      }
      onNext();
    }
  };

  const getTripDuration = () => {
    if (data.departureDate && data.returnDate) {
      return Math.ceil((data.returnDate.getTime() - data.departureDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  return (
    <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
        <CardTitle className="flex items-center text-2xl">
          <Plane className="h-8 w-8 mr-3" />
          Travel Details
        </CardTitle>
        <p className="text-blue-100 mt-2">Tell us about your upcoming journey</p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Quick Fill Travel Scenarios */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <Zap className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Popular Travel Scenarios</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Click any scenario below to auto-fill travel details</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockTravelScenarios.map((scenario, index) => {
                const IconComponent = scenario.icon;
                return (
                  <button
                    key={index}
                    onClick={() => fillMockData(scenario.data)}
                    className={`p-4 rounded-xl bg-gradient-to-r ${scenario.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-left group`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-6 w-6" />
                      <div className="text-xs opacity-75 group-hover:opacity-100">Click to fill</div>
                    </div>
                    <div className="font-semibold text-sm mb-1">{scenario.name}</div>
                    <div className="text-xs opacity-90">
                      {scenario.data.numberOfTravelers} {scenario.data.numberOfTravelers === 1 ? 'person' : 'people'} • {scenario.data.tripDuration} days
                    </div>
                    <div className="text-xs opacity-75 mt-1 capitalize">
                      {scenario.data.destination.replace('-', ' ')} • {scenario.data.tripPurpose}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Destination */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Destination</h3>
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                Destination Region *
              </Label>
              <Select value={data.destination || ''} onValueChange={(value) => handleChange('destination', value)}>
                <SelectTrigger className={`h-12 ${errors.destination ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select destination region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="domestic">Domestic Travel</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="americas">South America</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                  <SelectItem value="worldwide">Worldwide Coverage</SelectItem>
                </SelectContent>
              </Select>
              {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
            </div>
          </div>

          {/* Travel Dates */}
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Travel Dates</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Departure Date *
                </Label>
                <DatePicker
                  date={data.departureDate}
                  onDateChange={(date) => handleChange('departureDate', date)}
                  placeholder="Select departure date"
                  className={errors.departureDate ? 'border-red-500' : ''}
                />
                {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Return Date *
                </Label>
                <DatePicker
                  date={data.returnDate}
                  onDateChange={(date) => handleChange('returnDate', date)}
                  placeholder="Select return date"
                  className={errors.returnDate ? 'border-red-500' : ''}
                />
                {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>}
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div>
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Trip Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Purpose of Trip *
                </Label>
                <Select value={data.tripPurpose || ''} onValueChange={(value) => handleChange('tripPurpose', value)}>
                  <SelectTrigger className={`h-12 ${errors.tripPurpose ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leisure">Leisure/Tourism</SelectItem>
                    <SelectItem value="business">Business Travel</SelectItem>
                    <SelectItem value="study">Study/Education</SelectItem>
                    <SelectItem value="medical">Medical Treatment</SelectItem>
                    <SelectItem value="family">Visiting Family</SelectItem>
                    <SelectItem value="transit">Transit/Stopover</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tripPurpose && <p className="text-red-500 text-sm mt-1">{errors.tripPurpose}</p>}
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Number of Travelers *
                </Label>
                <Select 
                  value={data.numberOfTravelers?.toString() || ''} 
                  onValueChange={(value) => handleChange('numberOfTravelers', parseInt(value))}
                >
                  <SelectTrigger className={`h-12 ${errors.numberOfTravelers ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person (Solo Travel)</SelectItem>
                    <SelectItem value="2">2 People (Couple)</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People (Family)</SelectItem>
                    <SelectItem value="5">5 People</SelectItem>
                    <SelectItem value="6">6+ People (Group)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.numberOfTravelers && <p className="text-red-500 text-sm mt-1">{errors.numberOfTravelers}</p>}
              </div>
            </div>
          </div>

          {/* Trip Summary */}
          {data.departureDate && data.returnDate && data.destination && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                <Plane className="h-5 w-5 mr-2" />
                Trip Summary
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <span className="text-blue-600 font-medium block mb-1">Duration</span>
                  <div className="text-gray-700 font-semibold">
                    {getTripDuration()} {getTripDuration() === 1 ? 'day' : 'days'}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-blue-600 font-medium block mb-1">Travelers</span>
                  <div className="text-gray-700 font-semibold">
                    {data.numberOfTravelers} {data.numberOfTravelers === 1 ? 'person' : 'people'}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-blue-600 font-medium block mb-1">Region</span>
                  <div className="text-gray-700 font-semibold capitalize">
                    {data.destination?.replace('-', ' ')}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-blue-600 font-medium block mb-1">Purpose</span>
                  <div className="text-gray-700 font-semibold capitalize">
                    {data.tripPurpose}
                  </div>
                </div>
              </div>
              
              {getTripDuration() > 0 && (
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <div className="text-sm text-gray-600">
                    <strong>Travel Period:</strong> {data.departureDate?.toLocaleDateString()} → {data.returnDate?.toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={onPrev}
            className="flex items-center px-6 py-3 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Personal Info
          </Button>
          <Button 
            onClick={handleNext}
            className="flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Continue to Coverage
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}