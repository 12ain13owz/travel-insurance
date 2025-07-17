'use client'

import React from 'react'

export default function ContactInfoForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        กรอกข้อมูลติดต่อ
      </h4>
      <p className="text-gray-600 mb-6">
        ข้อมูลนี้ใช้สำหรับการติดต่อและจัดส่งเอกสารกรมธรรม์
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="เช่น yourname@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="เช่น 08XXXXXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="altPhoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            เบอร์โทรศัพท์สำรอง (ถ้ามี)
          </label>
          <input
            type="tel"
            id="altPhoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="เช่น 09XXXXXXXX"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            ที่อยู่สำหรับจัดส่งเอกสาร
          </label>
          <textarea
            id="address"
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="บ้านเลขที่, ถนน, แขวง/ตำบล, เขต/อำเภอ, จังหวัด, รหัสไปรษณีย์"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
