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
  oldPrice?: number;
  image: string;
  category: string;
  nicotine: number;
  packSizes: { size: string; price: number; oldPrice?: number }[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Siberia Red',
    brand: 'Siberia',
    strength: 'Экстра крепкий',
    flavor: 'Мята',
    price: 590,
    oldPrice: 690,
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&h=400&fit=crop',
    category: 'strong',
    nicotine: 43,
    packSizes: [
      { size: '1 шт', price: 590, oldPrice: 690 },
      { size: '5 шт', price: 2800, oldPrice: 3450 },
      { size: '10 шт', price: 5300, oldPrice: 6900 }
    ]
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
    nicotine: 10,
    packSizes: [
      { size: '1 шт', price: 450 },
      { size: '5 шт', price: 2150 },
      { size: '10 шт', price: 4000 }
    ]
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
    nicotine: 16,
    packSizes: [
      { size: '1 шт', price: 520 },
      { size: '5 шт', price: 2500 },
      { size: '10 шт', price: 4700 }
    ]
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
    nicotine: 6,
    packSizes: [
      { size: '1 шт', price: 420 },
      { size: '5 шт', price: 2000 },
      { size: '10 шт', price: 3800 }
    ]
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
    nicotine: 12,
    packSizes: [
      { size: '1 шт', price: 480 },
      { size: '5 шт', price: 2300 },
      { size: '10 шт', price: 4300 }
    ]
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
    nicotine: 9,
    packSizes: [
      { size: '1 шт', price: 440 },
      { size: '5 шт', price: 2100 },
      { size: '10 шт', price: 3900 }
    ]
  },
  {
    id: 7,
    name: 'Thunder Frosted',
    brand: 'Thunder',
    strength: 'Крепкий',
    flavor: 'Мята',
    price: 510,
    oldPrice: 580,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'strong',
    nicotine: 22,
    packSizes: [
      { size: '1 шт', price: 510, oldPrice: 580 },
      { size: '5 шт', price: 2450, oldPrice: 2900 },
      { size: '10 шт', price: 4600, oldPrice: 5800 }
    ]
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
    nicotine: 11,
    packSizes: [
      { size: '1 шт', price: 460 },
      { size: '5 шт', price: 2200 },
      { size: '10 шт', price: 4100 }
    ]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPacks, setSelectedPacks] = useState<Record<number, number>>({});

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.flavor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSelectedPack = (productId: number) => {
    return selectedPacks[productId] ?? 0;
  };

  const setSelectedPack = (productId: number, packIndex: number) => {
    setSelectedPacks(prev => ({ ...prev, [productId]: packIndex }));
  };

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
          {filteredProducts.map((product, index) => {
            const selectedPackIndex = getSelectedPack(product.id);
            const currentPack = product.packSizes[selectedPackIndex];
            
            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-white p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4 space-y-3 border-t border-gray-100">
                  <div>
                    <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                      {product.brand}
                    </a>
                    <h3 className="font-medium text-base leading-snug mt-1 hover:text-primary transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      {currentPack.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {currentPack.oldPrice} ₽
                        </span>
                      )}
                      <span className="text-lg font-bold text-foreground">
                        {currentPack.price} ₽
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {product.packSizes.map((pack, packIndex) => (
                        <button
                          key={packIndex}
                          onClick={() => setSelectedPack(product.id, packIndex)}
                          className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
                            selectedPackIndex === packIndex
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                          }`}
                        >
                          {pack.size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    Добавить в корзину
                  </Button>
                </div>
              </div>
            );
          })}
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