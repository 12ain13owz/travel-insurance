export default function ProductTrust() {
  return (
    <section className="lg:max-w-4xl container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="text-blue-600 font-bold text-2xl mb-2">100%</div>{' '}
          <div className="text-gray-700 text-lg">รับประกันความพึงพอใจ</div>{' '}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="text-blue-600 font-bold text-2xl mb-2">24/7</div>
          <div className="text-gray-700 text-lg">บริการลูกค้าสัมพันธ์</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="text-blue-600 font-bold text-2xl mb-2">5 นาที</div>
          <div className="text-gray-700 text-lg">รับความคุ้มครองทันที</div>
        </div>
      </div>
    </section>
  )
}
