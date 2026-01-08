import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
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

  const weddingDate = new Date('2026-04-24T16:30:00');
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

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.5), rgba(240, 240, 240, 0.5)), url('https://cdn.poehali.dev/files/IMG_1058.png')`
        }}
      >
        <div className="text-center space-y-8 max-w-2xl">
          <div className="absolute top-8 right-8">
            <div className="text-6xl">🎁</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-[0.2em]">
            WEDDING DAY
          </h1>
          
          <div className="text-8xl md:text-9xl font-extralight text-foreground/40 leading-none">
            24<br/>04<br/>26
          </div>

          <div className="space-y-6 mt-12">
            <div 
              className="relative inline-block transform -rotate-6 bg-white p-4 shadow-xl"
              style={{ maxWidth: '280px' }}
            >
              <img 
                src="https://cdn.poehali.dev/files/IMG_1058.png"
                alt="Детство невесты"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground mt-3 font-light text-left">
                – интересно, кто будет моим<br/>мужем, когда я вырасту?
              </p>
            </div>

            <div 
              className="relative inline-block transform rotate-3 bg-white p-4 shadow-xl ml-8"
              style={{ maxWidth: '280px' }}
            >
              <img 
                src="https://cdn.poehali.dev/files/IMG_1058.png"
                alt="Детство жениха"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground mt-3 font-light text-right">
                – им буду я
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="absolute top-8 right-8">
            <div className="text-6xl">🎁</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em]">
            УЗНАЛИ ЭТИХ<br/>МАЛЫШЕЙ?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Время пролетело незаметно. И вот наступил момент, когда наши детские мечты стали реальностью. Разделите с нами это главное событие весны – подарите нам своё внимание и поддержку!
          </p>

          <div className="py-8">
            <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
              <g transform="translate(100, 100)">
                <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <path d="M -15,-10 Q -15,-20 0,-20 Q 15,-20 15,-10" fill="currentColor" className="text-foreground"/>
                <circle cx="-8" cy="-5" r="2" fill="currentColor" className="text-foreground"/>
                <circle cx="8" cy="-5" r="2" fill="currentColor" className="text-foreground"/>
                <path d="M -10,5 Q 0,15 10,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <rect x="-20" y="40" width="40" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <path d="M -20,60 L -40,100 M 20,60 L 40,100" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <circle cx="0" cy="70" r="8" fill="currentColor" className="text-foreground"/>
              </g>
              
              <g transform="translate(280, 100)">
                <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <path d="M -20,-10 Q -20,-25 0,-25 Q 20,-25 20,-10 Q 20,5 0,5 Q -20,5 -20,-10" fill="currentColor" className="text-foreground"/>
                <circle cx="-8" cy="-5" r="2" fill="currentColor" className="text-foreground"/>
                <circle cx="8" cy="-5" r="2" fill="currentColor" className="text-foreground"/>
                <path d="M -10,8 Q 0,18 10,8" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <path d="M -10,40 Q -10,80 -30,100 Q -10,90 10,90 Q 30,90 30,100 Q 10,80 10,40 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                <circle cx="0" cy="70" r="8" fill="currentColor" className="text-foreground"/>
              </g>
              
              <path d="M 30,80 Q 30,60 50,60 L 150,60" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" markerEnd="url(#arrowhead)"/>
              <path d="M 350,80 Q 350,60 330,60 L 230,60" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" markerEnd="url(#arrowhead)"/>
              
              <path d="M 20,50 Q 10,40 5,35" fill="currentColor" className="text-foreground"/>
              <path d="M 360,50 Q 370,40 375,35" fill="currentColor" className="text-foreground"/>
              <path d="M 380,120 Q 390,130 395,135" fill="currentColor" className="text-foreground"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="absolute top-8 right-8">
            <div className="text-6xl">🎁</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em]">
            МЫ ЖДЁМ ВАС
          </h2>

          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em]">
              АПРЕЛЬ
            </h3>
            
            <div className="inline-block">
              <table className="text-center mx-auto">
                <thead>
                  <tr className="text-xs text-muted-foreground tracking-wider">
                    <th className="px-3 py-2">ПН</th>
                    <th className="px-3 py-2">ВТ</th>
                    <th className="px-3 py-2">СР</th>
                    <th className="px-3 py-2">ЧТ</th>
                    <th className="px-3 py-2">ПТ</th>
                    <th className="px-3 py-2">СБ</th>
                    <th className="px-3 py-2">ВС</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr>
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2">1</td>
                    <td className="px-3 py-2">2</td>
                    <td className="px-3 py-2">3</td>
                    <td className="px-3 py-2">4</td>
                    <td className="px-3 py-2">5</td>
                    <td className="px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">6</td>
                    <td className="px-3 py-2">7</td>
                    <td className="px-3 py-2">8</td>
                    <td className="px-3 py-2">9</td>
                    <td className="px-3 py-2">10</td>
                    <td className="px-3 py-2">11</td>
                    <td className="px-3 py-2">12</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">13</td>
                    <td className="px-3 py-2">14</td>
                    <td className="px-3 py-2">15</td>
                    <td className="px-3 py-2">16</td>
                    <td className="px-3 py-2">17</td>
                    <td className="px-3 py-2">18</td>
                    <td className="px-3 py-2">19</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">20</td>
                    <td className="px-3 py-2">21</td>
                    <td className="px-3 py-2">22</td>
                    <td className="px-3 py-2">23</td>
                    <td className="px-3 py-2 relative">
                      <span className="relative inline-block">
                        24
                        <span className="absolute inset-0 border-2 border-foreground rounded-full" style={{ width: '45px', height: '45px', top: '-12px', left: '-12px' }}></span>
                      </span>
                    </td>
                    <td className="px-3 py-2">25</td>
                    <td className="px-3 py-2">26</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">27</td>
                    <td className="px-3 py-2">28</td>
                    <td className="px-3 py-2">29</td>
                    <td className="px-3 py-2">30</td>
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">
              Не пропустите важное событие этой<br/>весны – день нашей свадьбы!
            </p>

            <p className="text-4xl font-light mt-6 tracking-wider">
              24 / 04 / 26
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="absolute top-8 right-8">
            <div className="text-6xl">🎁</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] text-center">
            ЛОКАЦИЯ
          </h2>

          <Card className="overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/IMG_1061.png"
              alt="Банкетный зал"
              className="w-full h-96 object-cover"
            />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-medium">Банкетный зал Сезон</h3>
              <p className="text-muted-foreground">
                улица Генерала Белика, 1. Бизнес центр Столица, 4 этаж.
              </p>
              <p className="text-lg font-light italic">
                * Сбор гостей - 16:30
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="absolute top-8 right-8">
            <div className="text-6xl">🎁</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em]">
            ТАЙМИНГ
          </h2>

          <div className="space-y-8 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-foreground mx-auto mb-2" />
              </div>
              <div>
                <p className="text-2xl font-light">16:30 • СБОР ГОСТЕЙ</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <path d="M 30,70 Q 40,75 50,75 Q 60,75 70,70" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 35,45 L 25,35 M 65,45 L 75,35" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-light">17:00 • БАНКЕТ</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2">
                  <path d="M 50,30 Q 40,35 35,45 Q 30,55 35,65 Q 40,75 50,80 Q 60,75 65,65 Q 70,55 65,45 Q 60,35 50,30 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 45,35 Q 40,38 38,42 M 55,35 Q 60,38 62,42" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="43" cy="50" r="2" fill="currentColor"/>
                  <circle cx="57" cy="50" r="2" fill="currentColor"/>
                  <path d="M 45,20 L 50,10 L 55,20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="35" cy="60" r="1.5" fill="currentColor"/>
                  <circle cx="40" cy="65" r="1.5" fill="currentColor"/>
                  <circle cx="50" cy="68" r="1.5" fill="currentColor"/>
                  <circle cx="60" cy="65" r="1.5" fill="currentColor"/>
                  <circle cx="65" cy="60" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-light">23:00 • ЗАВЕРШЕНИЕ ВЕЧЕРА</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Mail" className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] mb-6">ПОДТВЕРЖДЕНИЕ</h2>
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

      <footer className="py-12 text-center text-muted-foreground">
        <Icon name="Heart" className="mx-auto mb-4 text-primary" size={32} />
        <p className="text-lg">С любовью, Алексей и Ольга</p>
        <p className="text-sm mt-2">24.04.2026</p>
      </footer>
    </div>
  );
};

export default Index;
