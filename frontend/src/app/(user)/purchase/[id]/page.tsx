'use client'

import { Check } from 'lucide-react' // สำหรับไอคอน Checkmark
import React, { useState } from 'react'

import { Button } from '@/app/shared/ui/button'

import ContactInfoForm from '../components/contact-info-form'
import PurchaseHeader from '../components/purchase-header'
import SummaryPaymentForm from '../components/summary-payment-form'
import TravelDetailForm from '../components/travel-detail.form'
import TravelerDetailForm from '../components/traveler-detail-form'

// กำหนดประเภทสำหรับแต่ละขั้นตอน
interface Step {
  id: number
  name: string
}

export default function PurchaseStepper() {
  const [currentStep, setCurrentStep] = useState(1) // เริ่มต้นที่ขั้นตอนที่ 1

  // กำหนดรายละเอียดของแต่ละขั้นตอน
  const steps: Step[] = [
    { id: 1, name: 'ข้อมูลผู้เดินทาง' },
    { id: 2, name: 'ข้อมูลการเดินทาง' },
    { id: 3, name: 'ข้อมูลติดต่อ' },
    { id: 4, name: 'สรุปและชำระเงิน' },
  ]

  // ฟังก์ชันสำหรับไปขั้นตอนถัดไป
  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      // ในความเป็นจริง ตรงนี้คุณจะต้องมี logic ในการ validate form ของขั้นตอนปัจจุบัน
      // หาก validation ผ่าน จึงจะอนุญาตให้ไปขั้นตอนถัดไป
    }
  }

  // ฟังก์ชันสำหรับย้อนกลับขั้นตอนก่อนหน้า
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // กำหนด Content ของแต่ละขั้นตอน (เป็น Placeholder)
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TravelerDetailForm />
      case 2:
        return <TravelDetailForm />
      case 3:
        return <ContactInfoForm />
      case 4:
        // ตัวอย่างการส่ง props ไปยัง SummaryPaymentSection
        return <SummaryPaymentForm selectedPlanName="แผนยอดนิยม" selectedPlanPrice="549" />
      default:
        return null
    }
  }

  return (
    <>
      <PurchaseHeader></PurchaseHeader>

      <div className="container mx-auto px-4 -mt-10 ">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 md:p-10 mx-auto">
          {/* Stepper Header (Visual Steps) */}
          <div className="flex justify-between items-center mb-8 relative">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Line Connector (เส้นเชื่อมต่อ) */}
                {index > 0 && (
                  <div
                    className={`flex-1 h-1 transition-all duration-300 ease-in-out ${
                      currentStep > step.id - 1 ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
                {/* Step Circle and Name */}
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ease-in-out
                      ${
                        currentStep > step.id
                          ? 'bg-green-500' // Completed step
                          : currentStep === step.id
                          ? 'bg-blue-600' // Active step
                          : 'bg-gray-400' // Inactive step
                      }
                    `}
                  >
                    {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
                  </div>
                  <div
                    className={`mt-2 text-sm text-center font-medium transition-colors duration-300 ${
                      currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          <div className="mt-8">{renderStepContent()}</div>

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between">
            <Button variant="secondary" onClick={goToPreviousStep} disabled={currentStep === 1}>
              ย้อนกลับ
            </Button>

            <Button
              variant="primary"
              onClick={goToNextStep}
              disabled={currentStep === steps.length}
            >
              {currentStep === steps.length ? 'สิ้นสุด' : 'ดำเนินการต่อ'}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
