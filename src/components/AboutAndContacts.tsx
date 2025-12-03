import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface AboutAndContactsProps {
  scrollToSection: (section: string) => void;
}

const AboutAndContacts = ({ scrollToSection }: AboutAndContactsProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      if (typeof window.ymaps === 'undefined') return;

      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current!, {
          center: [55.751574, 37.573856],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl']
        });

        const placemark = new window.ymaps.Placemark([55.751574, 37.573856], {
          balloonContent: '<strong>Дом Культуры</strong><br>г. Москва, ул. Культурная, д. 15'
        }, {
          preset: 'islands#redTheaterIcon'
        });

        map.geoObjects.add(placemark);
      });
    };

    if (window.ymaps) {
      initMap();
    } else {
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps);
          initMap();
        }
      }, 100);

      return () => clearInterval(checkYmaps);
    }
  }, []);

  return (
    <>
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-100/50 to-orange-100/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-white">🏛️ О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Дом Культуры</h2>
              <p className="text-lg text-gray-700 mb-6">
                Наш дом культуры работает с 1985 года и является центром культурной жизни района. 
                Мы предлагаем широкий спектр мероприятий для всех возрастов: от детских утренников 
                до вечеров классической музыки.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                У нас современный зал на 500 мест с отличной акустикой, выставочное пространство, 
                танцевальные и репетиционные залы. Мы сотрудничаем с ведущими театрами и артистами.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-gray-600">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">500</div>
                  <div className="text-gray-600">мест в зале</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-gray-600">событий в год</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
                alt="О нас"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">📍 Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как нас найти</h2>
            <p className="text-xl text-gray-600">Приходите к нам</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Культурная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Вс: 10:00 - 22:00</p>
                    <p className="text-gray-600">Касса: 10:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 123-45-68</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@domkulturi.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl overflow-hidden animate-scale-in p-0" style={{ animationDelay: '0.2s' }}>
              <div ref={mapRef} className="h-full w-full min-h-[400px] rounded-lg"></div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Theater" size={32} />
                <h3 className="text-xl font-bold">Дом Культуры</h3>
              </div>
              <p className="text-white/80">Центр искусства и культуры с 1985 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('events')} className="hover:text-white transition-colors">Афиша</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Галерея</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">Программы</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors">Бронирование</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@domkulturi.ru</li>
                <li>г. Москва, ул. Культурная, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2025 Дом Культуры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutAndContacts;
