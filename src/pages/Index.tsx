import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');

  const events = [
    {
      id: 1,
      title: "Вечер классической музыки",
      date: "15 декабря 2025",
      time: "19:00",
      price: "от 500 ₽",
      category: "Музыка",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
    },
    {
      id: 2,
      title: "Театральная постановка «Три сестры»",
      date: "20 декабря 2025",
      time: "18:30",
      price: "от 700 ₽",
      category: "Театр",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
    },
    {
      id: 3,
      title: "Выставка современного искусства",
      date: "22 декабря 2025",
      time: "10:00",
      price: "Бесплатно",
      category: "Выставка",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e4fd3ad-8bd6-426c-a9e7-9cd7af3cd802.jpg"
    },
    {
      id: 4,
      title: "Детский новогодний утренник",
      date: "28 декабря 2025",
      time: "11:00",
      price: "от 300 ₽",
      category: "Детям",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
    }
  ];

  const gallery = [
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e141fbd-806f-46a4-a999-6c4dc25243e5.jpg",
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg",
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e4fd3ad-8bd6-426c-a9e7-9cd7af3cd802.jpg",
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e141fbd-806f-46a4-a999-6c4dc25243e5.jpg",
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg",
    "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e4fd3ad-8bd6-426c-a9e7-9cd7af3cd802.jpg"
  ];

  const reviews = [
    { id: 1, name: "Анна Петрова", rating: 5, text: "Прекрасное место для культурного отдыха! Всегда качественные постановки." },
    { id: 2, name: "Михаил Иванов", rating: 5, text: "Отличная акустика в зале, удобные кресла, приветливый персонал." },
    { id: 3, name: "Елена Сидорова", rating: 4, text: "Замечательные мероприятия для всей семьи. Рекомендую!" }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения бронирования.",
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
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

      <section id="home" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                🎭 Искусство и культура
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Откройте мир искусства
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Дом культуры — место, где рождаются эмоции, воплощаются мечты и создаются незабываемые впечатления
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('events')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Посмотреть афишу
                </Button>
                <Button onClick={() => scrollToSection('booking')} size="lg" variant="outline">
                  Забронировать билет
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/7e141fbd-806f-46a4-a999-6c4dc25243e5.jpg"
                alt="Дом культуры"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">📅 Актуальные события</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Афиша мероприятий</h2>
            <p className="text-xl text-gray-600">Выбирайте то, что вам по душе</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex justify-center">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="music">Музыка</TabsTrigger>
              <TabsTrigger value="theater">Театр</TabsTrigger>
              <TabsTrigger value="exhibition">Выставки</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event, index) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-primary">
                        {event.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        {event.date} в {event.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{event.price}</span>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-purple-100/50 to-orange-100/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">🎨 Наши моменты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Запечатленные мгновения искусства</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl aspect-square group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Icon name="ZoomIn" className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">📚 Наши программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Культурная программа</h2>
            <p className="text-xl text-gray-600">Разнообразие для каждого</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Music", title: "Музыкальные вечера", desc: "Классика, джаз, современная музыка" },
              { icon: "Theater", title: "Театральные постановки", desc: "Драма, комедия, музыкальные спектакли" },
              { icon: "Palette", title: "Художественные выставки", desc: "Живопись, скульптура, инсталляции" },
              { icon: "Users", title: "Мастер-классы", desc: "Танцы, вокал, актерское мастерство" },
              { icon: "BookOpen", title: "Литературные встречи", desc: "Поэзия, проза, встречи с авторами" },
              { icon: "Film", title: "Киноклуб", desc: "Авторское и классическое кино" }
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-purple-100/50 to-orange-100/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">🎫 Бронирование</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать билет</h2>
            <p className="text-xl text-gray-600">Заполните форму, и мы свяжемся с вами</p>
          </div>
          <Card className="shadow-2xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="ivan@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Мероприятие</label>
                  <Input placeholder="Название мероприятия" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Количество билетов</label>
                  <Input type="number" min="1" placeholder="1" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Комментарий</label>
                  <Textarea placeholder="Дополнительная информация..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">💬 Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят посетители</h2>
            <p className="text-xl text-gray-600">Мнения наших гостей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <Card className="shadow-xl overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-full w-full bg-gradient-to-br from-purple-200 to-orange-200 flex items-center justify-center">
                <div className="text-center p-12">
                  <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-700">Интерактивная карта</p>
                  <p className="text-gray-600 mt-2">Здесь может быть размещена карта</p>
                </div>
              </div>
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
    </div>
  );
};

export default Index;
