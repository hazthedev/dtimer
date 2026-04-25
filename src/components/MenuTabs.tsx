import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import menuData from '../data/menu.json';

type FilterTag = 'halal' | 'vegetarian' | 'spicy' | 'signature';

const filters: { key: FilterTag; label: string; emoji?: string }[] = [
  { key: 'halal', label: 'Halal', emoji: '✓' },
  { key: 'vegetarian', label: 'Vegetarian' },
  { key: 'spicy', label: 'Spicy', emoji: '🌶️' },
  { key: 'signature', label: 'Signature' },
];

export default function MenuTabs() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);

  const categories = menuData.map(c => c.category);

  const currentItems = useMemo(() => {
    const categoryItems = menuData.find(c => c.category === activeCategory)?.items || [];
    if (activeFilters.length === 0) return categoryItems;
    return categoryItems.filter(item =>
      activeFilters.every(filter => item.tags?.includes(filter))
    );
  }, [activeCategory, activeFilters]);

  const toggleFilter = (filter: FilterTag) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="bg-bone-white min-h-screen pb-20">
      {/* Sticky Tabs */}
      <div className="sticky top-16 sm:top-20 z-30 bg-bone-white/95 backdrop-blur-md border-b border-coconut-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'text-sambal-red'
                    : 'text-tea-brown hover:text-warm-black'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-sambal-red/10 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => {
            const isActive = activeFilters.includes(filter.key);
            return (
              <button
                key={filter.key}
                onClick={() => toggleFilter(filter.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sambal-red text-bone-white shadow-md'
                    : 'bg-warm-sand text-tea-brown hover:bg-coconut-cream'
                }`}
              >
                {filter.emoji && <span>{filter.emoji}</span>}
                {filter.label}
              </button>
            );
          })}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="px-4 py-2 rounded-full text-sm font-medium text-tea-brown hover:text-sambal-red transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-tea-brown text-lg">No dishes match your filters.</p>
            <button
              onClick={() => setActiveFilters([])}
              className="mt-4 text-sambal-red font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentItems.map((item, index) => (
              <motion.article
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group bg-warm-sand rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-coconut-cream/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-coconut-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={e => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';
                    }}
                  />
                  {item.johorOriginal && (
                    <span className="absolute top-3 left-3 bg-sambal-red text-bone-white text-xs font-bold px-3 py-1 rounded-full">
                      Johor Original
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-warm-black leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-sm font-bold text-sambal-red whitespace-nowrap mt-0.5">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-tea-brown leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-bone-white text-tea-brown capitalize"
                        >
                          {tag === 'spicy' ? '🌶️ Spicy' : tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
