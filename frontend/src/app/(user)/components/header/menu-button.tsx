export default function MobileMenu({
  isScrolled,
  isMenuOpen,
  onClick,
}: {
  isScrolled: boolean
  isMenuOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 rounded-lg transition-colors duration-300"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute left-0 w-6 h-0.5 transition-all duration-300
            ${isMenuOpen || isScrolled ? 'bg-blue-600' : 'bg-white'}
            ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}
          `}
        ></span>

        <span
          className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300
            ${isMenuOpen || isScrolled ? 'bg-blue-600' : 'bg-white'}
            ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
          `}
        ></span>

        <span
          className={`absolute left-0 w-6 h-0.5 transition-all duration-300
            ${isMenuOpen || isScrolled ? 'bg-blue-600' : 'bg-white'}
            ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}
          `}
        ></span>
      </div>
    </button>
  )
}
