import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import MainSections from '@/components/MainSections';
import BookingAndReviews from '@/components/BookingAndReviews';
import AboutAndContacts from '@/components/AboutAndContacts';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      title: "Вечер классической музыки",
      date: "15 декабря 2025",
      time: "19:00",
      price: "от 500 ₽",
      category: "Концерты",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
    },
    {
      id: 2,
      title: "Театральная постановка «Три сестры»",
      date: "20 декабря 2025",
      time: "18:30",
      price: "от 700 ₽",
      category: "Спектакли",
      image: "https://cdn.poehali.dev/projects/1bbc0589-bdfb-4f99-8a6c-409c1790eb91/files/d32b17fd-1ef1-4d7d-b164-38074085bd8b.jpg"
    },
    {
      id: 3,
      title: "Новогодний праздник для всей семьи",
      date: "22 декабря 2025",
      time: "16:00",
      price: "от 200 ₽",
      category: "Массовые праздники",
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
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <MainSections
        scrollToSection={scrollToSection}
        events={events}
        gallery={gallery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      
      <BookingAndReviews handleBooking={handleBooking} reviews={reviews} />
      
      <AboutAndContacts scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
