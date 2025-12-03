import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  price: string;
  category: string;
  image: string;
}

interface MainSectionsProps {
  scrollToSection: (section: string) => void;
  events: Event[];
  gallery: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
}

const MainSections = ({
  scrollToSection,
  events,
  gallery,
  selectedCategory,
  setSelectedCategory,
  selectedImage,
  setSelectedImage
}: MainSectionsProps) => {
  return (
    <>
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
                src="https://cdn.poehali.dev/files/83e73277-7df3-4596-954e-d56daa98c413.jpg"
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
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="mb-8 flex justify-center">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Концерты">Концерты</TabsTrigger>
              <TabsTrigger value="Спектакли">Спектакли</TabsTrigger>
              <TabsTrigger value="Массовые праздники">Массовые праздники</TabsTrigger>
              <TabsTrigger value="Детям">Детям</TabsTrigger>
            </TabsList>
            <TabsContent value={selectedCategory}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events
                  .filter(event => selectedCategory === 'all' || event.category === selectedCategory)
                  .map((event, index) => (
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
                className="relative overflow-hidden rounded-2xl aspect-square group animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image)}
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

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-0">
              <div className="relative">
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0"
                  size="icon"
                >
                  <Icon name="X" size={24} />
                </Button>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Увеличенное изображение"
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
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
    </>
  );
};

export default MainSections;
