import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Theater" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">Дом Культуры</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'events', 'gallery', 'programs', 'booking', 'reviews', 'about', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'events' && 'Афиша'}
                {section === 'gallery' && 'Галерея'}
                {section === 'programs' && 'Программа'}
                {section === 'booking' && 'Бронирование'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'about' && 'О нас'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
