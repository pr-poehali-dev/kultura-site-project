import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

interface BookingAndReviewsProps {
  handleBooking: (e: React.FormEvent) => void;
  reviews: Review[];
}

const BookingAndReviews = ({ handleBooking, reviews }: BookingAndReviewsProps) => {
  return (
    <>
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
    </>
  );
};

export default BookingAndReviews;
