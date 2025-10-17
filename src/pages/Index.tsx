import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Account {
  id: number;
  name: string;
  price: number;
  level: number;
  robux: number;
  items: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  features: string[];
  image: string;
  verified: boolean;
}

const accounts: Account[] = [
  {
    id: 1,
    name: 'Legendary Pro Account',
    price: 4990,
    level: 156,
    robux: 5000,
    items: 89,
    rarity: 'Legendary',
    features: ['Premium подписка', 'Редкие скины', 'VIP доступ', 'Достижения'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/dc092c6b-97fc-4815-9ebf-db5c3ce45198.jpg',
    verified: true
  },
  {
    id: 2,
    name: 'Epic Gamer Pro',
    price: 2990,
    level: 98,
    robux: 2500,
    items: 54,
    rarity: 'Epic',
    features: ['Premium подписка', 'Много скинов', 'Статистика'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/d4cef626-0dab-41bf-999f-80aa5419be68.jpg',
    verified: true
  },
  {
    id: 3,
    name: 'Rare Starter Pack',
    price: 1490,
    level: 45,
    robux: 800,
    items: 28,
    rarity: 'Rare',
    features: ['Premium 1 месяц', 'Базовые скины', 'Стартовый набор'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/44887c32-8ce5-4f08-8653-7e1542049d6e.jpg',
    verified: false
  },
  {
    id: 4,
    name: 'Premium Collector',
    price: 5990,
    level: 203,
    robux: 8000,
    items: 156,
    rarity: 'Legendary',
    features: ['Premium год', 'Эксклюзивы', 'Все DLC', 'Топ рейтинг'],
    image: '/placeholder.svg',
    verified: true
  },
  {
    id: 5,
    name: 'Common Beginner',
    price: 590,
    level: 12,
    robux: 200,
    items: 8,
    rarity: 'Common',
    features: ['Новый аккаунт', 'Базовый набор'],
    image: '/placeholder.svg',
    verified: false
  },
  {
    id: 6,
    name: 'Epic Battle Master',
    price: 3490,
    level: 120,
    robux: 3500,
    items: 72,
    rarity: 'Epic',
    features: ['Premium полгода', 'Боевые скины', 'Оружие'],
    image: '/placeholder.svg',
    verified: true
  }
];

const rarityColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Epic: 'bg-purple-500',
  Legendary: 'bg-yellow-500'
};

const rarityGradients = {
  Common: 'from-gray-500/20 to-gray-500/5',
  Rare: 'from-blue-500/20 to-blue-500/5',
  Epic: 'from-purple-500/20 to-purple-500/5',
  Legendary: 'from-yellow-500/20 to-yellow-500/5'
};

export default function Index() {
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [levelRange, setLevelRange] = useState([0, 250]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>(['Common', 'Rare', 'Epic', 'Legendary']);
  const [minRobux, setMinRobux] = useState(0);

  const filteredAccounts = accounts.filter(account => {
    const priceMatch = account.price >= priceRange[0] && account.price <= priceRange[1];
    const levelMatch = account.level >= levelRange[0] && account.level <= levelRange[1];
    const rarityMatch = selectedRarities.includes(account.rarity);
    const robuxMatch = account.robux >= minRobux;
    return priceMatch && levelMatch && rarityMatch && robuxMatch;
  });

  const toggleRarity = (rarity: string) => {
    setSelectedRarities(prev =>
      prev.includes(rarity) ? prev.filter(r => r !== rarity) : [...prev, rarity]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <Badge className="bg-accent text-accent-foreground px-6 py-2 text-lg font-bold animate-scale-in">
              🎮 ROBLOX ACCOUNTS SHOP
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Купи аккаунт мечты!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Тысячи аккаунтов с робаксами, скинами и достижениями. Моментальная передача!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-2xl shadow-accent/50 animate-scale-in">
              <Icon name="ShoppingCart" className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold backdrop-blur-sm">
              <Icon name="Shield" className="mr-2" />
              Гарантии
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center border-primary/30 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Zap" className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Моментальная передача</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Получите аккаунт сразу после оплаты</p>
            </CardContent>
          </Card>

          <Card className="text-center border-secondary/30 hover:border-secondary transition-all hover:shadow-xl hover:shadow-secondary/20 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">100% безопасно</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Все аккаунты проверены и защищены</p>
            </CardContent>
          </Card>

          <Card className="text-center border-accent/30 hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/20 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Headphones" className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl">Поддержка 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Поможем с любым вопросом</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16 bg-border" />

        <div>
          <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Каталог аккаунтов
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-6 border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Icon name="SlidersHorizontal" className="mr-2" />
                    Фильтры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Gem" className="w-4 h-4 mr-2 text-accent" />
                      Редкость
                    </h3>
                    <div className="space-y-2">
                      {(['Legendary', 'Epic', 'Rare', 'Common'] as const).map(rarity => (
                        <div key={rarity} className="flex items-center space-x-2">
                          <Checkbox
                            id={rarity}
                            checked={selectedRarities.includes(rarity)}
                            onCheckedChange={() => toggleRarity(rarity)}
                          />
                          <label htmlFor={rarity} className="text-sm cursor-pointer flex items-center">
                            <span className={`w-3 h-3 rounded-full ${rarityColors[rarity]} mr-2`}></span>
                            {rarity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Wallet" className="w-4 h-4 mr-2 text-accent" />
                      Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
                    </h3>
                    <Slider
                      min={0}
                      max={6000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="TrendingUp" className="w-4 h-4 mr-2 text-accent" />
                      Уровень: {levelRange[0]} - {levelRange[1]}
                    </h3>
                    <Slider
                      min={0}
                      max={250}
                      step={5}
                      value={levelRange}
                      onValueChange={setLevelRange}
                      className="mb-2"
                    />
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Coins" className="w-4 h-4 mr-2 text-accent" />
                      Мин. робаксы: {minRobux}
                    </h3>
                    <Slider
                      min={0}
                      max={10000}
                      step={100}
                      value={[minRobux]}
                      onValueChange={(value) => setMinRobux(value[0])}
                      className="mb-2"
                    />
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10"
                    onClick={() => {
                      setPriceRange([0, 6000]);
                      setLevelRange([0, 250]);
                      setSelectedRarities(['Common', 'Rare', 'Epic', 'Legendary']);
                      setMinRobux(0);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  Найдено аккаунтов: <span className="font-bold text-foreground text-xl">{filteredAccounts.length}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAccounts.map((account, index) => (
                  <Card 
                    key={account.id} 
                    className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 bg-gradient-to-br ${rarityGradients[account.rarity]} hover:border-${account.rarity === 'Legendary' ? 'yellow' : account.rarity === 'Epic' ? 'purple' : account.rarity === 'Rare' ? 'blue' : 'gray'}-500/50`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    
                    {account.verified && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-secondary text-secondary-foreground">
                          <Icon name="BadgeCheck" className="w-3 h-3 mr-1" />
                          Проверен
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden bg-muted/50 aspect-square">
                        <img 
                          src={account.image} 
                          alt={account.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className={`absolute top-4 left-4 ${rarityColors[account.rarity]} text-white font-bold px-3 py-1`}>
                          {account.rarity}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <CardTitle className="mb-3 text-xl">{account.name}</CardTitle>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-muted/50 rounded-lg p-2 text-center">
                          <Icon name="TrendingUp" className="w-4 h-4 mx-auto mb-1 text-primary" />
                          <p className="text-xs text-muted-foreground">Уровень</p>
                          <p className="font-bold">{account.level}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-2 text-center">
                          <Icon name="Coins" className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Робаксы</p>
                          <p className="font-bold">{account.robux}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-2 text-center">
                          <Icon name="Package" className="w-4 h-4 mx-auto mb-1 text-secondary" />
                          <p className="text-xs text-muted-foreground">Предметы</p>
                          <p className="font-bold">{account.items}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {account.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-primary/30">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Цена</p>
                        <p className="text-2xl font-black text-primary">
                          {account.price.toLocaleString()} ₽
                        </p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/30">
                        <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-primary/20 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как происходит передача аккаунта?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После оплаты вы моментально получаете данные для входа (логин и пароль) на вашу электронную почту. 
                Весь процесс занимает не более 2 минут!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-primary/20 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Безопасно ли покупать аккаунты?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Все аккаунты проверены нашей службой безопасности. Мы гарантируем, что аккаунты не забанены 
                и соответствуют описанию. При любых проблемах действует гарантия возврата средств.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-primary/20 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Что делать, если не могу войти в аккаунт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Свяжитесь с нашей поддержкой 24/7 через чат на сайте или Telegram. 
                Мы поможем решить проблему или вернем деньги в течение 24 часов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-primary/20 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли вернуть деньги?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Возврат возможен в течение 24 часов после покупки, если аккаунт не соответствует описанию 
                или возникли технические проблемы с доступом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-primary/20 rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Принимаем карты (Visa, MasterCard, Мир), электронные кошельки (QIWI, ЮMoney), 
                криптовалюту и платежи через СБП.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <footer className="bg-card/80 backdrop-blur-sm border-t border-primary/20 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">🎮 ROBLOX SHOP</h3>
              <p className="text-muted-foreground text-sm">
                Лучший магазин аккаунтов Roblox. Безопасно, быстро, надежно.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <Icon name="MessageCircle" className="w-4 h-4 mr-2 text-secondary" />
                  Telegram: @robloxshop
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2 text-secondary" />
                  support@robloxshop.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Как купить</li>
                <li className="hover:text-primary cursor-pointer">Гарантии</li>
                <li className="hover:text-primary cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-primary/10 hover:bg-primary/20 border-primary/30">
                  <Icon name="Send" className="w-4 h-4 text-primary" />
                </Button>
                <Button size="icon" variant="outline" className="bg-secondary/10 hover:bg-secondary/20 border-secondary/30">
                  <Icon name="Youtube" className="w-4 h-4 text-secondary" />
                </Button>
                <Button size="icon" variant="outline" className="bg-accent/10 hover:bg-accent/20 border-accent/30">
                  <Icon name="Instagram" className="w-4 h-4 text-accent" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-border" />
          <p className="text-center text-muted-foreground text-sm">
            © 2024 ROBLOX Accounts Shop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}