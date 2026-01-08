import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
    attending: true
  });

  const weddingDate = new Date('2026-04-24T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Мы получили ваш ответ. До встречи на празднике!",
    });
    setFormData({ name: '', guests: '', message: '', attending: true });
  };

  const timelineEvents = [
    {
      year: "1995",
      title: "Детство",
      description: "Так всё начиналось...",
      image: "https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/dd792792-7f2c-455c-868c-ae957e2c680e.jpg"
    },
    {
      year: "2015",
      title: "Первая встреча",
      description: "Судьба свела нас вместе",
      image: "https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/dd792792-7f2c-455c-868c-ae957e2c680e.jpg"
    },
    {
      year: "2020",
      title: "Помолвка",
      description: "Самый важный вопрос и ответ 'Да!'",
      image: "https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/dd792792-7f2c-455c-868c-ae957e2c680e.jpg"
    },
    {
      year: "2026",
      title: "Наша свадьба",
      description: "Начало нашей совместной жизни",
      image: "https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/0d5914e1-b435-4b78-b37d-1759913f581e.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/a4657ef8-02d3-4584-9a22-3c5b85a9323c.jpg')`
        }}
      >
        <div className="text-center space-y-6 animate-fade-in px-4">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-4">Алексей & Ольга</h1>
          <Separator className="w-24 mx-auto bg-primary/30" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light">24 апреля 2026</p>
          
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-lg text-muted-foreground mb-6">До самого важного дня осталось</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-muted-foreground">дней</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-muted-foreground">часов</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-muted-foreground">минут</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-muted-foreground">секунд</div>
              </Card>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mt-6">Приглашаем вас разделить с нами этот особенный день</p>
          <Button 
            variant="default" 
            size="lg" 
            className="mt-8 text-lg px-8"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Подтвердить участие
          </Button>
        </div>
      </div>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-4">Наша история</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Путешествие через годы, которое привело нас к этому особенному дню
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="inline-block">
                  <span className="text-4xl font-light text-primary block mb-3">{event.year}</span>
                  <h3 className="text-3xl font-medium text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-lg">{event.description}</p>
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg flex-shrink-0">
                <Icon name="Heart" className="text-primary-foreground" size={28} />
              </div>
              
              <div className="flex-1">
                <Card className="overflow-hidden shadow-xl animate-scale-in">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="MapPin" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">Место проведения</h2>
          
          <Card className="mt-8 overflow-hidden shadow-xl">
            <img 
              src="https://cdn.poehali.dev/projects/eb5f77a8-d6ce-43e9-a618-688d000910c2/files/0d5914e1-b435-4b78-b37d-1759913f581e.jpg"
              alt="Место проведения"
              className="w-full h-96 object-cover"
            />
            <CardContent className="p-8 text-left">
              <h3 className="text-2xl font-medium mb-4">Загородный клуб "Романтика"</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                  <p>Московская область, Истринский район, деревня Лечищево</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="mt-1 flex-shrink-0" />
                  <p>Начало церемонии в 15:00</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Car" size={20} className="mt-1 flex-shrink-0" />
                  <p>Парковка для гостей доступна на территории</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="CalendarDays" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">Программа дня</h2>
        </div>

        <div className="space-y-6">
          {[
            { time: "15:00", title: "Регистрация гостей", description: "Встреча гостей, welcome drink" },
            { time: "15:30", title: "Церемония", description: "Торжественная церемония бракосочетания" },
            { time: "16:30", title: "Фуршет и поздравления", description: "Легкий фуршет, фотосессия с молодоженами" },
            { time: "18:00", title: "Праздничный ужин", description: "Банкет и развлекательная программа" },
            { time: "21:00", title: "Первый танец", description: "Первый танец молодоженов" },
            { time: "22:00", title: "Вечеринка", description: "Танцы до утра!" },
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-6 items-start">
                <div className="text-3xl font-light text-primary min-w-[80px]">{item.time}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Shirt" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">Дресс-код</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы будем рады видеть вас в нарядах пастельных тонов
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-left">
              <Icon name="User" className="mb-4 text-primary" size={32} />
              <h3 className="text-2xl font-medium mb-4">Для мужчин</h3>
              <p className="text-muted-foreground">
                Светлый костюм (бежевый, песочный, светло-серый), рубашка пастельного оттенка
              </p>
            </Card>
            <Card className="p-8 text-left">
              <Icon name="User" className="mb-4 text-primary" size={32} />
              <h3 className="text-2xl font-medium mb-4">Для женщин</h3>
              <p className="text-muted-foreground">
                Платье пастельных оттенков (персиковый, лавандовый, розовый, мятный)
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Mail" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">Подтверждение</h2>
          <p className="text-lg text-muted-foreground">
            Пожалуйста, подтвердите своё участие до 10 апреля 2026
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваше имя *</label>
              <Input
                required
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Количество гостей *</label>
              <Input
                required
                type="number"
                min="1"
                placeholder="2"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Сможете ли вы присутствовать? *</label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={formData.attending ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setFormData({ ...formData, attending: true })}
                >
                  Да, буду
                </Button>
                <Button
                  type="button"
                  variant={!formData.attending ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setFormData({ ...formData, attending: false })}
                >
                  К сожалению, нет
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Пожелания или комментарии</label>
              <Textarea
                placeholder="Особые пожелания по питанию, музыке или что-то ещё..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full text-lg" size="lg">
              Отправить ответ
            </Button>
          </form>
        </Card>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Phone" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-medium mb-4">Невеста</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-lg">Ольга</p>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-medium mb-4">Жених</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-lg">Алексей</p>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79009876543" className="hover:text-primary transition-colors">
                    +7 (900) 987-65-43
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <p className="mt-12 text-lg text-muted-foreground">
            По всем вопросам вы можете связаться с нами любым удобным способом
          </p>
        </div>
      </section>

      <footer className="py-12 text-center text-muted-foreground">
        <Icon name="Heart" className="mx-auto mb-4 text-primary" size={32} />
        <p className="text-lg">С любовью, Алексей и Ольга</p>
        <p className="text-sm mt-2">24.04.2026</p>
      </footer>
    </div>
  );
};

export default Index;