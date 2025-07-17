interface Statistic {
  value: string
  label: string
}

export default function StatisticSection() {
  const statistics: Statistic[] = [
    { value: '50K+', label: 'Travelers Protected' },
    { value: '100+', label: 'Countries Covered' },
    { value: '24/7', label: 'Support Available' },
    { value: '98%', label: 'Customer Satisfaction' },
  ]

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((statistic: Statistic) => (
            <div key={statistic.value} className="text-white">
              <div className="text-4xl font-bold mb-2">{statistic.value}</div>
              <div className="text-white/80">{statistic.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
