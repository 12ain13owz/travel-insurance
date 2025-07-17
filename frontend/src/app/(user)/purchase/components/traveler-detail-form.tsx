'use client'

import React from 'react'

import Input from '@/app/shared/ui/input'
import Select from '@/app/shared/ui/select'

export default function TravelerDetailForm() {
  const titleOptions = [
    { value: 'คำนำหน้า', label: 'คำนำหน้า', disabled: true },
    { value: 'นาย', label: 'นาย' },
    { value: 'นางสาว', label: 'นางสาว' },
  ]

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">กรอกข้อมูลผู้เดินทาง</h4>
      <p className="text-gray-600 mb-6">โปรดระบุข้อมูลส่วนตัวของผู้เดินทางให้ถูกต้องและครบถ้วน</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          id="passportNumber"
          name="passportNumber"
          label="เลขหนังสือเดินทาง"
          placeholder="เลขหนังสือเดินทาง"
          required={true}
        ></Input>

        <Select
          id="title"
          name="title"
          defaultValue="คำนำหน้า"
          options={titleOptions}
          required={true}
        ></Select>

        <Input
          type="text"
          id="firstNameTH"
          name="firstNameTH"
          label="ชื่อ (ภาษาไทย)"
          placeholder="ชื่อ (ภาษาไทย)"
          required={true}
        ></Input>

        <Input
          type="text"
          id="lastNameTH"
          name="lastNameTH"
          label="นามสกุล (ภาษาไทย)"
          placeholder="นามสกุล (ภาษาไทย)"
          required={true}
        ></Input>

        <Input
          type="text"
          id="firstNameEN"
          name="firstNameEN"
          label="ชื่อ (ภาษาอังกฤษ)"
          placeholder="ชื่อ (ภาษาอังกฤษ)"
          required={true}
        ></Input>

        <Input
          type="text"
          id="lastNameEN"
          name="lastNameEN"
          label="นามสกุล (ภาษาอังกฤษ)"
          placeholder="นามสกุล (ภาษาอังกฤษ)"
          required={true}
        ></Input>

        <input type="date" className="input" />
      </div>
    </div>
  )
}
