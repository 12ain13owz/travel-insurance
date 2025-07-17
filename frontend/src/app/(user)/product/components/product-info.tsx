import { Button } from '@/app/shared/ui/button'

export default function ProductInfo() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        ยังไม่แน่ใจว่าจะเลือกแผนไหนดี?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษา
        เพื่อช่วยคุณเลือกแผนประกันที่เหมาะสมที่สุดสำหรับทริปถัดไปของคุณ
      </p>
      <Button variant="success">ติดต่อเราเพื่อขอคำปรึกษา</Button>
    </section>
  )
}
