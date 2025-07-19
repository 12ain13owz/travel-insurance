const title_1 = 'Choose Your Perfect'
const title_2 = 'Protection Plan'
const description =
  'Select the coverage that best fits your travel needs. All plans include our award-winning 24/7 support and instant digital policy delivery.'

export default function HeaderSection() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {title_1}
            <span className="block bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent">
              {title_2}
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
