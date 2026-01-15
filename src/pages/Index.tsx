import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  brand: string;
  strength: string;
  flavor: string;
  price: number;
  image: string;
  category: string;
  nicotine: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Siberia Red',
    brand: 'Siberia',
    strength: 'Экстра крепкий',
    flavor: 'Мята',
    price: 590,
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&h=400&fit=crop',
    category: 'strong',
    nicotine: 43
  },
  {
    id: 2,
    name: 'Velo Ice Cool',
    brand: 'Velo',
    strength: 'Средний',
    flavor: 'Ледяная мята',
    price: 450,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop',
    category: 'medium',
    nicotine: 10
  },
  {
    id: 3,
    name: 'White Fox',
    brand: 'White Fox',
    strength: 'Крепкий',
    flavor: 'Мята',
    price: 520,
    image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc4cf?w=400&h=400&fit=crop',
    category: 'strong',
    nicotine: 16
  },
  {
    id: 4,
    name: 'Lyft Freeze',
    brand: 'Lyft',
    strength: 'Легкий',
    flavor: 'Мята',
    price: 420,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop',
    category: 'light',
    nicotine: 6
  },
  {
    id: 5,
    name: 'Skruf Polar',
    brand: 'Skruf',
    strength: 'Средний',
    flavor: 'Мята',
    price: 480,
    image: 'https://images.unsplash.com/photo-1583912267550-a43e31868b6b?w=400&h=400&fit=crop',
    category: 'medium',
    nicotine: 12
  },
  {
    id: 6,
    name: 'Nordic Spirit Berry',
    brand: 'Nordic Spirit',
    strength: 'Легкий',
    flavor: 'Ягоды',
    price: 440,
    image: 'https://images.unsplash.com/photo-1601924381319-5e1c20c2e9d6?w=400&h=400&fit=crop',
    category: 'light',
    nicotine: 9
  },
  {
    id: 7,
    name: 'Thunder Frosted',
    brand: 'Thunder',
    strength: 'Крепкий',
    flavor: 'Мята',
    price: 510,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'strong',
    nicotine: 22
  },
  {
    id: 8,
    name: 'Ace Cool Mint',
    brand: 'Ace',
    strength: 'Средний',
    flavor: 'Прохладная мята',
    price: 460,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'medium',
    nicotine: 11
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.flavor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Snus Store</h1>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="search"
                placeholder="Поиск товаров..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="whitespace-nowrap"
          >
            Все товары
          </Button>
          <Button
            variant={selectedCategory === 'light' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('light')}
            className="whitespace-nowrap"
          >
            Легкие
          </Button>
          <Button
            variant={selectedCategory === 'medium' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('medium')}
            className="whitespace-nowrap"
          >
            Средние
          </Button>
          <Button
            variant={selectedCategory === 'strong' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('strong')}
            className="whitespace-nowrap"
          >
            Крепкие
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium">{product.brand}</p>
                    <h3 className="font-heading font-semibold text-lg leading-tight mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.nicotine} мг
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-xs">
                    {product.strength}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {product.flavor}
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-heading font-bold text-2xl">
                    {product.price} ₽
                  </span>
                  <Button size="sm" className="gap-2">
                    <Icon name="Plus" size={16} />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading font-semibold text-xl mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>

      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold">Snus Store</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Snus Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
