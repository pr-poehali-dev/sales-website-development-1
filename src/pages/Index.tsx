import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    type: 'hero',
    title: 'СДЕРШОП',
    subtitle: 'Магазин премиум Roblox аккаунтов',
    description: 'Лучшие аккаунты с робаксами, скинами и достижениями',
    cta: 'Начать презентацию'
  },
  {
    id: 2,
    type: 'about',
    title: 'Почему выбирают нас?',
    features: [
      { icon: 'Zap', title: 'Моментальная доставка', desc: 'Получите аккаунт за 2 минуты после оплаты', color: 'text-yellow-500' },
      { icon: 'Shield', title: 'Гарантия безопасности', desc: 'Все аккаунты проверены и безопасны', color: 'text-green-500' },
      { icon: 'Award', title: 'Возврат денег', desc: 'Гарантия возврата в течение 24 часов', color: 'text-blue-500' },
      { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи для решения вопросов', color: 'text-purple-500' }
    ]
  },
  {
    id: 3,
    type: 'catalog',
    title: 'Каталог аккаунтов',
    accounts: [
      {
        name: 'Legendary PRO',
        price: 5990,
        level: 220,
        robux: 12000,
        items: 145,
        rarity: 'Legendary',
        image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/dc092c6b-97fc-4815-9ebf-db5c3ce45198.jpg',
        discount: 20
      },
      {
        name: 'Epic Battle King',
        price: 3490,
        level: 156,
        robux: 5000,
        items: 89,
        rarity: 'Epic',
        image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/d4cef626-0dab-41bf-999f-80aa5419be68.jpg'
      },
      {
        name: 'Rare Collector',
        price: 1990,
        level: 98,
        robux: 2500,
        items: 54,
        rarity: 'Rare',
        image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/44887c32-8ce5-4f08-8653-7e1542049d6e.jpg'
      }
    ]
  },
  {
    id: 4,
    type: 'process',
    title: 'Как купить аккаунт?',
    steps: [
      { icon: 'Search', title: '1. Выберите аккаунт', desc: 'Используйте фильтры по цене, уровню и робаксам' },
      { icon: 'ShoppingCart', title: '2. Оформите заказ', desc: 'Укажите контакты и способ оплаты' },
      { icon: 'CreditCard', title: '3. Оплатите', desc: 'Принимаем карты, СБП, криптовалюту' },
      { icon: 'Gift', title: '4. Получите доступ', desc: 'Данные от аккаунта придут моментально' }
    ]
  },
  {
    id: 5,
    type: 'reviews',
    title: 'Отзывы клиентов',
    reviews: [
      { name: 'Алексей', rating: 5, text: 'Купил легендарный аккаунт, все супер! Доставка за 1 минуту!', avatar: '🎮' },
      { name: 'Мария', rating: 5, text: 'Отличный магазин, поддержка помогла выбрать аккаунт. Рекомендую!', avatar: '⭐' },
      { name: 'Дмитрий', rating: 5, text: 'Третья покупка здесь. Цены лучшие, аккаунты топовые!', avatar: '🔥' },
      { name: 'Анна', rating: 5, text: 'Сомневалась, но все прошло идеально. Спасибо СДЕРШОП!', avatar: '💎' }
    ]
  },
  {
    id: 6,
    type: 'stats',
    title: 'Наши достижения',
    stats: [
      { value: '5000+', label: 'Довольных клиентов', icon: 'Users' },
      { value: '10000+', label: 'Продано аккаунтов', icon: 'ShoppingBag' },
      { value: '4.9/5', label: 'Средний рейтинг', icon: 'Star' },
      { value: '24/7', label: 'Поддержка онлайн', icon: 'Headphones' }
    ]
  },
  {
    id: 7,
    type: 'cta',
    title: 'Готовы начать?',
    subtitle: 'Присоединяйтесь к тысячам счастливых игроков!',
    description: 'Выберите свой идеальный аккаунт прямо сейчас',
    contacts: [
      { icon: 'Send', text: 'Telegram: @sdershop', link: '#' },
      { icon: 'Mail', text: 'info@sdershop.ru', link: '#' },
      { icon: 'Globe', text: 'sdershop.ru', link: '#' }
    ]
  }
];

const rarityColors = {
  Legendary: 'bg-amber-500',
  Epic: 'bg-purple-500',
  Rare: 'bg-blue-500',
  Common: 'bg-gray-500'
};

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Gamepad2" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-primary">СДЕРШОП</h1>
                <p className="text-xs text-muted-foreground">Roblox Shop</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-semibold">{currentSlide + 1} / {slides.length}</span>
              <div className="flex gap-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 pb-24">
          <div className="w-full max-w-6xl">
            {slide.type === 'hero' && (
              <div className="text-center animate-fade-in">
                <div className="mb-8">
                  <div className="inline-block p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mb-6 animate-scale-in">
                    <Icon name="Gamepad2" className="w-24 h-24 text-primary" />
                  </div>
                  <h1 className="text-8xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-slide-up" style={{ textShadow: '0 0 40px rgba(230, 57, 70, 0.3)' }}>
                    {slide.title}
                  </h1>
                  <div className="flex items-center justify-center gap-3 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary"></div>
                    <p className="text-2xl text-muted-foreground font-bold tracking-wide">{slide.subtitle}</p>
                    <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary"></div>
                  </div>
                  <p className="text-xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>{slide.description}</p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-6 text-lg shadow-2xl shadow-primary/50 animate-scale-in" 
                    onClick={nextSlide}
                    style={{ animationDelay: '0.3s' }}
                  >
                    {slide.cta}
                    <Icon name="ChevronRight" className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {slide.type === 'about' && (
              <div className="animate-fade-in">
                <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {slide.features?.map((feature, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Icon name={feature.icon as any} className={`w-8 h-8 ${feature.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                            <p className="text-muted-foreground text-lg">{feature.desc}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'catalog' && (
              <div className="animate-fade-in">
                <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {slide.accounts?.map((account, index) => (
                    <Card 
                      key={index} 
                      className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {account.discount && (
                        <div className="absolute top-4 left-4 z-20">
                          <Badge className="bg-accent text-accent-foreground font-bold shadow-lg text-base px-3 py-1">
                            -{account.discount}%
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden aspect-square bg-muted/50">
                          <img 
                            src={account.image} 
                            alt={account.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <Badge className={`${rarityColors[account.rarity as keyof typeof rarityColors]} text-white font-bold text-sm px-3 py-1 shadow-lg`}>
                              ⭐ {account.rarity}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <h3 className="text-2xl font-black mb-4">{account.name}</h3>
                        
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-muted/50 rounded-lg p-3 text-center">
                            <Icon name="TrendingUp" className="w-5 h-5 mx-auto mb-1 text-primary" />
                            <p className="text-xs text-muted-foreground font-bold">LVL</p>
                            <p className="font-black text-lg">{account.level}</p>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 text-center">
                            <Icon name="Coins" className="w-5 h-5 mx-auto mb-1 text-accent" />
                            <p className="text-xs text-muted-foreground font-bold">R$</p>
                            <p className="font-black text-lg">{account.robux}</p>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 text-center">
                            <Icon name="Package" className="w-5 h-5 mx-auto mb-1 text-secondary" />
                            <p className="text-xs text-muted-foreground font-bold">ITEMS</p>
                            <p className="font-black text-lg">{account.items}</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Цена</p>
                            <p className="text-3xl font-black text-primary">{account.price.toLocaleString()} ₽</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'process' && (
              <div className="animate-fade-in">
                <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {slide.steps?.map((step, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl shadow-primary/50">
                            <Icon name={step.icon as any} className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-3">{step.title}</CardTitle>
                            <p className="text-muted-foreground text-lg">{step.desc}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'reviews' && (
              <div className="animate-fade-in">
                <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {slide.reviews?.map((review, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-xl">{review.name}</CardTitle>
                              <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Icon key={i} name="Star" className="w-4 h-4 fill-accent text-accent" />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">{review.text}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'stats' && (
              <div className="animate-fade-in">
                <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {slide.stats?.map((stat, index) => (
                    <Card 
                      key={index} 
                      className="text-center border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-primary/50">
                          <Icon name={stat.icon as any} className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-5xl font-black text-primary mb-3">{stat.value}</CardTitle>
                        <p className="text-muted-foreground text-lg font-semibold">{stat.label}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'cta' && (
              <div className="text-center animate-fade-in">
                <div className="mb-12">
                  <div className="inline-block p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mb-6 animate-scale-in">
                    <Icon name="Rocket" className="w-24 h-24 text-primary" />
                  </div>
                  <h2 className="text-7xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up">
                    {slide.title}
                  </h2>
                  <p className="text-3xl text-muted-foreground mb-3 font-bold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {slide.subtitle}
                  </p>
                  <p className="text-xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {slide.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                  {slide.contacts?.map((contact, index) => (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                            <Icon name={contact.icon as any} className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-base font-bold">{contact.text}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-16 py-8 text-xl shadow-2xl shadow-primary/50 animate-scale-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Icon name="ShoppingBag" className="mr-3 w-6 h-6" />
                  Перейти в каталог
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto px-6 pb-6">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="font-bold border-2 disabled:opacity-30"
            >
              <Icon name="ChevronLeft" className="mr-2 w-5 h-5" />
              Назад
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="font-bold border-2 disabled:opacity-30"
            >
              Далее
              <Icon name="ChevronRight" className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
