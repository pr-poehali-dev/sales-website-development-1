import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
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
  discount?: number;
}

const accounts: Account[] = [
  {
    id: 1,
    name: 'Mega Legendary PRO',
    price: 5990,
    level: 220,
    robux: 12000,
    items: 145,
    rarity: 'Legendary',
    features: ['Premium год', 'Все пропуска', 'Редкие скины', 'VIP статус'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/dc092c6b-97fc-4815-9ebf-db5c3ce45198.jpg',
    verified: true,
    discount: 20
  },
  {
    id: 2,
    name: 'Epic Battle King',
    price: 3490,
    level: 156,
    robux: 5000,
    items: 89,
    rarity: 'Epic',
    features: ['Premium 6 мес', 'Боевые скины', 'Оружие', 'Достижения'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/d4cef626-0dab-41bf-999f-80aa5419be68.jpg',
    verified: true
  },
  {
    id: 3,
    name: 'Rare Collector',
    price: 1990,
    level: 98,
    robux: 2500,
    items: 54,
    rarity: 'Rare',
    features: ['Premium 3 мес', 'Много скинов', 'Статистика'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/44887c32-8ce5-4f08-8653-7e1542049d6e.jpg',
    verified: true
  },
  {
    id: 4,
    name: 'Ultimate Champion',
    price: 7990,
    level: 305,
    robux: 18000,
    items: 203,
    rarity: 'Legendary',
    features: ['Premium навсегда', 'ВСЕ DLC', 'Топ-1 рейтинг', 'Эксклюзивы'],
    image: '/placeholder.svg',
    verified: true,
    discount: 15
  },
  {
    id: 5,
    name: 'Epic Gamer Pro',
    price: 2990,
    level: 120,
    robux: 3500,
    items: 72,
    rarity: 'Epic',
    features: ['Premium 6 мес', 'Скины', 'Оружие', 'Пропуски'],
    image: '/placeholder.svg',
    verified: true
  },
  {
    id: 6,
    name: 'Common Starter',
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
    id: 7,
    name: 'Rare Adventurer',
    price: 1490,
    level: 65,
    robux: 1500,
    items: 35,
    rarity: 'Rare',
    features: ['Premium 2 мес', 'Стартовые скины', 'Инвентарь'],
    image: '/placeholder.svg',
    verified: true
  },
  {
    id: 8,
    name: 'Epic Warrior Max',
    price: 4290,
    level: 178,
    robux: 6500,
    items: 112,
    rarity: 'Epic',
    features: ['Premium год', 'Военные скины', 'Транспорт', 'Питомцы'],
    image: '/placeholder.svg',
    verified: true,
    discount: 10
  }
];

const rarityColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Epic: 'bg-purple-500',
  Legendary: 'bg-amber-500'
};

const rarityBorders = {
  Common: 'border-gray-500/30',
  Rare: 'border-blue-500/30',
  Epic: 'border-purple-500/30',
  Legendary: 'border-amber-500/30'
};

export default function Index() {
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [levelRange, setLevelRange] = useState([0, 350]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>(['Common', 'Rare', 'Epic', 'Legendary']);
  const [minRobux, setMinRobux] = useState(0);
  const [onlyVerified, setOnlyVerified] = useState(false);

  const filteredAccounts = accounts.filter(account => {
    const priceMatch = account.price >= priceRange[0] && account.price <= priceRange[1];
    const levelMatch = account.level >= levelRange[0] && account.level <= levelRange[1];
    const rarityMatch = selectedRarities.includes(account.rarity);
    const robuxMatch = account.robux >= minRobux;
    const verifiedMatch = !onlyVerified || account.verified;
    return priceMatch && levelMatch && rarityMatch && robuxMatch && verifiedMatch;
  });

  const toggleRarity = (rarity: string) => {
    setSelectedRarities(prev =>
      prev.includes(rarity) ? prev.filter(r => r !== rarity) : [...prev, rarity]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-8 animate-scale-in">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(230, 57, 70, 0.5), 0 0 60px rgba(230, 57, 70, 0.3)' }}>
              СДЕРШОП
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-accent"></div>
              <p className="text-white/90 text-lg tracking-widest uppercase font-bold">Roblox Accounts</p>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Лучшие аккаунты с робаксами, скинами и достижениями. <br/>Моментальная передача 24/7!
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-2xl shadow-accent/50 px-8">
              <Icon name="ShoppingBag" className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold backdrop-blur-sm">
              <Icon name="MessageCircle" className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6 -mt-20 mb-16 relative z-10">
          {[
            { icon: 'Zap', title: 'Моментально', desc: 'Получите за 2 минуты', color: 'primary' },
            { icon: 'Shield', title: 'Безопасно', desc: 'Все проверено', color: 'secondary' },
            { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи', color: 'accent' },
            { icon: 'Award', title: 'Гарантия', desc: 'Возврат денег', color: 'primary' }
          ].map((item, idx) => (
            <Card key={idx} className="text-center border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 bg-card/90 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardHeader>
                <div className="mx-auto w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-3">
                  <Icon name={item.icon as any} className={`w-7 h-7 text-${item.color}`} />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-border" />

        <div>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Каталог аккаунтов
            </h2>
            <p className="text-muted-foreground text-lg">Выберите идеальный аккаунт для себя</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-6 border-primary/20 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary text-xl">
                    <Icon name="SlidersHorizontal" className="mr-2" />
                    Фильтры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4 flex items-center text-base">
                      <Icon name="Gem" className="w-5 h-5 mr-2 text-accent" />
                      Редкость
                    </h3>
                    <div className="space-y-3">
                      {(['Legendary', 'Epic', 'Rare', 'Common'] as const).map(rarity => (
                        <div key={rarity} className="flex items-center space-x-3">
                          <Checkbox
                            id={rarity}
                            checked={selectedRarities.includes(rarity)}
                            onCheckedChange={() => toggleRarity(rarity)}
                          />
                          <label htmlFor={rarity} className="text-sm cursor-pointer flex items-center font-medium">
                            <span className={`w-3 h-3 rounded-full ${rarityColors[rarity]} mr-2 shadow-lg`}></span>
                            {rarity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-bold mb-4 flex items-center text-base">
                      <Icon name="Wallet" className="w-5 h-5 mr-2 text-accent" />
                      Цена
                    </h3>
                    <div className="mb-3 flex justify-between text-sm font-semibold">
                      <span className="text-primary">{priceRange[0]} ₽</span>
                      <span className="text-primary">{priceRange[1]} ₽</span>
                    </div>
                    <Slider
                      min={0}
                      max={8000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-bold mb-4 flex items-center text-base">
                      <Icon name="TrendingUp" className="w-5 h-5 mr-2 text-accent" />
                      Уровень
                    </h3>
                    <div className="mb-3 flex justify-between text-sm font-semibold">
                      <span className="text-primary">{levelRange[0]}</span>
                      <span className="text-primary">{levelRange[1]}</span>
                    </div>
                    <Slider
                      min={0}
                      max={350}
                      step={10}
                      value={levelRange}
                      onValueChange={setLevelRange}
                      className="mb-2"
                    />
                  </div>

                  <Separator className="bg-border" />

                  <div>
                    <h3 className="font-bold mb-4 flex items-center text-base">
                      <Icon name="Coins" className="w-5 h-5 mr-2 text-accent" />
                      Мин. робаксы
                    </h3>
                    <div className="mb-3 text-sm font-semibold text-primary">
                      {minRobux.toLocaleString()} R$
                    </div>
                    <Slider
                      min={0}
                      max={20000}
                      step={500}
                      value={[minRobux]}
                      onValueChange={(value) => setMinRobux(value[0])}
                      className="mb-2"
                    />
                  </div>

                  <Separator className="bg-border" />

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="verified"
                      checked={onlyVerified}
                      onCheckedChange={(checked) => setOnlyVerified(checked as boolean)}
                    />
                    <label htmlFor="verified" className="text-sm cursor-pointer flex items-center font-medium">
                      <Icon name="BadgeCheck" className="w-4 h-4 mr-1 text-secondary" />
                      Только проверенные
                    </label>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10 font-semibold"
                    onClick={() => {
                      setPriceRange([0, 8000]);
                      setLevelRange([0, 350]);
                      setSelectedRarities(['Common', 'Rare', 'Epic', 'Legendary']);
                      setMinRobux(0);
                      setOnlyVerified(false);
                    }}
                  >
                    <Icon name="X" className="w-4 h-4 mr-2" />
                    Сбросить
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-8 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Найдено аккаунтов</p>
                  <p className="text-3xl font-black text-primary">{filteredAccounts.length}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="font-semibold">
                    <Icon name="ArrowUpDown" className="w-4 h-4 mr-1" />
                    По цене
                  </Button>
                  <Button variant="outline" size="sm" className="font-semibold">
                    <Icon name="Star" className="w-4 h-4 mr-1" />
                    Популярные
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAccounts.map((account, index) => (
                  <Card 
                    key={account.id} 
                    className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 ${rarityBorders[account.rarity]} hover:border-${account.rarity === 'Legendary' ? 'amber' : account.rarity === 'Epic' ? 'purple' : account.rarity === 'Rare' ? 'blue' : 'gray'}-500/60 bg-card/80 backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {account.discount && (
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-accent text-accent-foreground font-bold shadow-lg">
                          -{account.discount}%
                        </Badge>
                      </div>
                    )}

                    {account.verified && (
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-secondary text-secondary-foreground font-bold shadow-lg">
                          <Icon name="BadgeCheck" className="w-3 h-3 mr-1" />
                          ✓
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden bg-muted/50 aspect-square">
                        <img 
                          src={account.image} 
                          alt={account.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <Badge className={`${rarityColors[account.rarity]} text-white font-bold px-3 py-1 shadow-lg`}>
                            ⭐ {account.rarity}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-5">
                      <CardTitle className="mb-4 text-xl font-black">{account.name}</CardTitle>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-muted/50 rounded-lg p-2.5 text-center hover:bg-muted transition-colors">
                          <Icon name="TrendingUp" className="w-4 h-4 mx-auto mb-1 text-primary" />
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">Уровень</p>
                          <p className="font-black text-sm">{account.level}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-2.5 text-center hover:bg-muted transition-colors">
                          <Icon name="Coins" className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">Робаксы</p>
                          <p className="font-black text-sm">{account.robux}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-2.5 text-center hover:bg-muted transition-colors">
                          <Icon name="Package" className="w-4 h-4 mx-auto mb-1 text-secondary" />
                          <p className="text-[10px] text-muted-foreground uppercase font-bold">Предметы</p>
                          <p className="font-black text-sm">{account.items}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {account.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-[10px] border-primary/30 font-semibold">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-5 pt-0 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Цена</p>
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
      </div>

      <footer className="bg-card/90 backdrop-blur-sm border-t border-primary/20 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-black text-primary mb-2">СДЕРШОП</h3>
            <p className="text-muted-foreground">Лучший магазин Roblox аккаунтов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center">
                  <Icon name="Send" className="w-4 h-4 mr-2 text-secondary" />
                  Telegram: @sdershop
                </p>
                <p className="flex items-center justify-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2 text-secondary" />
                  info@sdershop.ru
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Как купить</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Гарантии</li>
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Соцсети</h4>
              <div className="flex gap-3 justify-center">
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
          
          <Separator className="my-6 bg-border" />
          <p className="text-center text-muted-foreground text-sm">
            © 2024 СДЕРШОП. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
