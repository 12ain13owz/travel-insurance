// components/purchase-stepper/SummaryPaymentSection.tsx
'use client'

import React from 'react'

interface SummaryPaymentFormProps {
  // คุณสามารถส่งข้อมูลแผนที่เลือกและข้อมูลที่กรอกมาทั้งหมดเข้ามาที่นี่ได้
  selectedPlanName?: string
  selectedPlanPrice?: string
  // travelerDetails?: any; // ตัวอย่าง
  // travelDetails?: any; // ตัวอย่าง
}

export default function SummaryPaymentForm({
  selectedPlanName = 'แผนที่ยังไม่ได้เลือก', // ค่าเริ่มต้นสำหรับตัวอย่าง
  selectedPlanPrice = '0', // ค่าเริ่มต้นสำหรับตัวอย่าง
}: SummaryPaymentFormProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        สรุปและชำระเงิน
      </h4>
      <p className="text-gray-600 mb-6">
        โปรดตรวจสอบข้อมูลทั้งหมดให้ถูกต้อง ก่อนดำเนินการชำระเงิน
      </p>

      {/* สรุปข้อมูลแผนประกัน */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="font-semibold text-blue-800 mb-2">
          สรุปแผนประกันที่เลือก:
        </p>
        <p className="text-blue-700 text-lg">
          <span className="font-medium">ชื่อแผน:</span> {selectedPlanName}
        </p>
        <p className="text-blue-700 text-lg">
          <span className="font-medium">ราคา:</span> {selectedPlanPrice}{' '}
          บาท/ทริป
        </p>
      </div>

      {/* สรุปข้อมูลที่กรอก (Placeholder) */}
      <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="font-semibold text-gray-800 mb-2">ข้อมูลผู้เดินทาง:</p>
        <ul className="list-disc list-inside text-gray-700 text-base">
          <li>ชื่อ-นามสกุล: [ดึงมาจาก state]</li>
          <li>วันเกิด: [ดึงมาจาก state]</li>
          {/* เพิ่มข้อมูลอื่นๆ */}
        </ul>
        <p className="font-semibold text-gray-800 mt-4 mb-2">
          ข้อมูลการเดินทาง:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base">
          <li>วันเดินทาง: [ดึงมาจาก state]</li>
          <li>ประเทศปลายทาง: [ดึงมาจาก state]</li>
          {/* เพิ่มข้อมูลอื่นๆ */}
        </ul>
        <p className="font-semibold text-gray-800 mt-4 mb-2">ข้อมูลติดต่อ:</p>
        <ul className="list-disc list-inside text-gray-700 text-base">
          <li>อีเมล: [ดึงมาจาก state]</li>
          <li>เบอร์โทรศัพท์: [ดึงมาจาก state]</li>
          {/* เพิ่มข้อมูลอื่นๆ */}
        </ul>
      </div>

      {/* ช่องทางการชำระเงิน (Placeholder) */}
      <div className="mb-8">
        <h5 className="text-lg font-semibold mb-3 text-gray-800">
          เลือกช่องทางการชำระเงิน:
        </h5>
        <div className="space-y-3">
          <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              className="mr-3 text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium text-gray-700">
              บัตรเครดิต / เดบิต
            </span>
          </label>
          <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="bankTransfer"
              className="mr-3 text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium text-gray-700">โอนเงินผ่านธนาคาร</span>
          </label>
          <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="promptPay"
              className="mr-3 text-blue-600 focus:ring-blue-500"
            />
            <span className="font-medium text-gray-700">พร้อมเพย์</span>
          </label>
        </div>
      </div>

      {/* ปุ่มดำเนินการชำระเงิน */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="flex-1 py-3 px-6 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-md">
          ดำเนินการชำระเงิน
        </button>
      </div>
    </div>
  )
}
