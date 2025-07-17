'use client'

import React from 'react'

export default function TravelDetailForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        กรอกข้อมูลการเดินทาง
      </h4>
      <p className="text-gray-600 mb-6">
        ระบุรายละเอียดการเดินทางของคุณ
        เพื่อให้เราสามารถคำนวณความคุ้มครองที่เหมาะสม
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="departureDate"
            className="block text-sm font-medium text-gray-700"
          >
            วันเดินทางไป
          </label>
          <input
            type="date"
            id="departureDate"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="returnDate"
            className="block text-sm font-medium text-gray-700"
          >
            วันเดินทางกลับ
          </label>
          <input
            type="date"
            id="returnDate"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="destinationCountry"
            className="block text-sm font-medium text-gray-700"
          >
            ประเทศปลายทาง
          </label>
          <input
            type="text"
            id="destinationCountry"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="เช่น ญี่ปุ่น, สหรัฐอเมริกา"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="travelPurpose"
            className="block text-sm font-medium text-gray-700"
          >
            วัตถุประสงค์การเดินทาง
          </label>
          <select
            id="travelPurpose"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">เลือกวัตถุประสงค์</option>
            <option value="leisure">ท่องเที่ยวพักผ่อน</option>
            <option value="business">ธุรกิจ</option>
            <option value="study">ศึกษาต่อ</option>
            <option value="adventure">ผจญภัย/กีฬา</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
      </div>
    </div>
  )
}
