import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  features: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Премиум наушники',
    price: 12990,
    category: 'Электроника',
    rating: 4.8,
    reviews: 124,
    features: ['Шумоподавление', 'Bluetooth 5.0', '30ч работы'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/86c88516-d8d1-456b-9907-c641be3dddfe.jpg'
  },
  {
    id: 2,
    name: 'Умные часы',
    price: 24990,
    category: 'Электроника',
    rating: 4.6,
    reviews: 89,
    features: ['GPS', 'Водонепроницаемость', 'Пульсометр'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/9a6864cb-a0a7-469c-9d17-a6681de96bee.jpg'
  },
  {
    id: 3,
    name: 'Беспроводная клавиатура',
    price: 5990,
    category: 'Аксессуары',
    rating: 4.7,
    reviews: 203,
    features: ['Механические переключатели', 'RGB подсветка', 'Компактная'],
    image: 'https://cdn.poehali.dev/projects/15bee1e3-45d9-404e-aad7-734f22f3db09/files/ad0d4909-cf14-4816-96d3-b749aee95c93.jpg'
  },
  {
    id: 4,
    name: 'Портативная колонка',
    price: 7990,
    category: 'Аудио',
    rating: 4.9,
    reviews: 156,
    features: ['Водонепроницаемая', '360° звук', '20ч работы'],
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Веб-камера 4K',
    price: 8990,
    category: 'Электроника',
    rating: 4.5,
    reviews: 67,
    features: ['4K разрешение', 'Автофокус', 'Микрофон'],
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Игровая мышь',
    price: 3990,
    category: 'Аксессуары',
    rating: 4.8,
    reviews: 312,
    features: ['16000 DPI', 'RGB', 'Программируемые кнопки'],
    image: '/placeholder.svg'
  }
];

const services = [
  {
    title: 'Бесплатная доставка',
    description: 'При заказе от 5000 ₽',
    icon: 'Truck'
  },
  {
    title: 'Гарантия качества',
    description: '2 года на всю продукцию',
    icon: 'Shield'
  },
  {
    title: 'Поддержка 24/7',
    description: 'Ответим на любые вопросы',
    icon: 'Headphones'
  }
];

const reviews = [
  {
    name: 'Алексей М.',
    rating: 5,
    text: 'Отличный магазин! Быстрая доставка, товар соответствует описанию. Рекомендую!',
    date: '2 дня назад'
  },
  {
    name: 'Мария К.',
    rating: 5,
    text: 'Заказывала наушники, очень довольна качеством. Поддержка помогла с выбором.',
    date: '1 неделю назад'
  },
  {
    name: 'Дмитрий П.',
    rating: 4,
    text: 'Хороший ассортимент, приятные цены. Буду заказывать ещё.',
    date: '2 недели назад'
  }
];

const categories = ['Все', 'Электроника', 'Аксессуары', 'Аудио'];

export default function Index() {
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Все']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const allFeatures = Array.from(new Set(products.flatMap(p => p.features)));

  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = selectedCategories.includes('Все') || selectedCategories.includes(product.category);
    const featureMatch = selectedFeatures.length === 0 || selectedFeatures.some(f => product.features.includes(f));
    return priceMatch && categoryMatch && featureMatch;
  });

  const toggleCategory = (category: string) => {
    if (category === 'Все') {
      setSelectedCategories(['Все']);
    } else {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== 'Все'), category];
      setSelectedCategories(newCategories.length === 0 ? ['Все'] : newCategories);
    }
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-24 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Технологии будущего
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Лучшие гаджеты и аксессуары для вашей жизни
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-2xl shadow-accent/50 animate-scale-in">
            <Icon name="ShoppingCart" className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Каталог товаров</h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="SlidersHorizontal" className="mr-2" />
                    Фильтры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Layers" className="w-4 h-4 mr-2" />
                      Категории
                    </h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Wallet" className="w-4 h-4 mr-2" />
                      Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
                    </h3>
                    <Slider
                      min={0}
                      max={30000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Icon name="Sparkles" className="w-4 h-4 mr-2" />
                      Характеристики
                    </h3>
                    <div className="space-y-2">
                      {allFeatures.map(feature => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={selectedFeatures.includes(feature)}
                            onCheckedChange={() => toggleFeature(feature)}
                          />
                          <label htmlFor={feature} className="text-sm cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setPriceRange([0, 30000]);
                      setSelectedCategories(['Все']);
                      setSelectedFeatures([]);
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
                  Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg bg-muted aspect-square">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 right-4 bg-primary">{product.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="mb-2 text-lg">{product.name}</CardTitle>
                      <CardDescription className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {product.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="ShoppingCart" className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Настройка и установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Помощь в настройке и установке купленных устройств. Наши специалисты подключат и настроят любую технику.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ремонт и обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Быстрый ремонт электроники и аксессуаров. Используем только оригинальные запчасти.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="RefreshCw" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Trade-in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сдайте старое устройство и получите скидку на новое. Оценим ваш гаджет по честной цене.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-secondary text-white py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О компании</h3>
              <p className="text-white/80 text-sm">
                Мы предлагаем лучшие технологические решения для вашего комфорта и продуктивности.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@shop.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Доставка и оплата</li>
                <li>Гарантия и возврат</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Facebook" className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Instagram" className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Twitter" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <p className="text-center text-white/60 text-sm">
            © 2024 Интернет-магазин технологий. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}