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
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative w-full h-32 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white tracking-tight">VELO</h1>
            <button className="flex items-center gap-2 text-white text-sm">
              <Icon name="X" size={16} />
              Закрыть
            </button>
          </div>
          <div className="flex gap-2">
            <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=80&h=80&fit=crop" alt="Velo" className="w-12 h-12 rounded-full object-cover" />
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop" alt="Velo" className="w-12 h-12 rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute left-4 bottom-3">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            СКИДКА 10%
          </span>
        </div>
      </div>

      <div className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="flex gap-6 px-4 py-3 border-b border-gray-100 overflow-x-auto">
          <button className="text-base font-bold text-black whitespace-nowrap border-b-2 border-black pb-1">
            Главная
          </button>
          <button className="text-base text-gray-400 whitespace-nowrap">
            Бренды
          </button>
          <button className="text-base text-gray-400 whitespace-nowrap">
            Ватки
          </button>
          <button className="text-base text-gray-400 whitespace-nowrap">
            Импорт
          </button>
        </div>

        <div className="px-4 py-3">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Быстрый поиск..."
              className="pl-10 bg-gray-50 border-0 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 pb-3">
          <button className="p-2 border border-gray-300 rounded-lg">
            <Icon name="SlidersHorizontal" size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
            Бренды
            <Icon name="ChevronDown" size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
            Крепость
            <Icon name="ChevronDown" size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
            Формат
            <Icon name="ChevronDown" size={16} />
          </button>
        </div>
      </div>

      <main className="px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">НОВЫЕ ПРОДУКТЫ</h2>

        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product, index) => {
            const selectedPackIndex = getSelectedPack(product.id);
            const currentPack = product.packSizes[selectedPackIndex];
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-square bg-gray-50 p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <div className="p-3 space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {product.brand} NICOTINE POUCHES
                  </p>
                  <h3 className="font-bold text-sm leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-xl font-bold">
                    {currentPack.price.toLocaleString()} ₽
                  </p>

                  <div className="flex gap-1.5 flex-wrap">
                    {product.packSizes.map((pack, packIndex) => (
                      <button
                        key={packIndex}
                        onClick={() => setSelectedPack(product.id, packIndex)}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                          selectedPackIndex === packIndex
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {pack.size.replace(' шт', ' банок').replace('1 банок', '1 банка')}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2 items-center pt-1">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold">
                      Купить
                    </Button>
                    <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                      <Icon name="ShoppingCart" size={18} />
                    </button>
                  </div>
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

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 z-50">
        <div className="flex justify-around items-center h-20 px-4">
          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <span className="text-xs font-medium text-black">Главная</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-gray-400" />
            </div>
            <span className="text-xs text-gray-400">Избранное</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Icon name="ShoppingCart" size={24} className="text-gray-400" />
            </div>
            <span className="text-xs text-gray-400">Корзина</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" 
              alt="Profile" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            <span className="text-xs text-gray-400">Профиль</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;