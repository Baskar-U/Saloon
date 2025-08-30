import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🌟' },
    { id: 'haircuts', name: 'Haircuts', icon: '💇‍♀️' },
    { id: 'makeup', name: 'Makeup', icon: '💄' },
    { id: 'facial', name: 'Facial', icon: '✨' },
    { id: 'bridal', name: 'Bridal', icon: '👰' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'haircuts',
      title: 'Modern Bob Cut',
      description: 'Before and after transformation',
      before: 'Before: Long hair, no style',
      after: 'After: Chic bob cut with layers',
      rating: 5,
      likes: 128,
      image: '💇‍♀️'
    },
    {
      id: 2,
      category: 'makeup',
      title: 'Party Makeup',
      description: 'Glamorous evening look',
      before: 'Before: Natural look',
      after: 'After: Glamorous party makeup',
      rating: 5,
      likes: 95,
      image: '💄'
    },
    {
      id: 3,
      category: 'facial',
      title: 'Rejuvenating Facial',
      description: 'Skin transformation',
      before: 'Before: Dull, tired skin',
      after: 'After: Glowing, fresh skin',
      rating: 5,
      likes: 156,
      image: '✨'
    },
    {
      id: 4,
      category: 'bridal',
      title: 'Traditional Bridal Look',
      description: 'Complete bridal transformation',
      before: 'Before: Simple makeup',
      after: 'After: Traditional bridal elegance',
      rating: 5,
      likes: 203,
      image: '👰'
    },
    {
      id: 5,
      category: 'haircuts',
      title: 'Layered Haircut',
      description: 'Volume and movement',
      before: 'Before: Flat, straight hair',
      after: 'After: Voluminous layers',
      rating: 5,
      likes: 87,
      image: '💇‍♀️'
    },
    {
      id: 6,
      category: 'makeup',
      title: 'Natural Makeup',
      description: 'Everyday beauty',
      before: 'Before: No makeup',
      after: 'After: Natural, enhanced beauty',
      rating: 5,
      likes: 134,
      image: '💄'
    },
    {
      id: 7,
      category: 'facial',
      title: 'Anti-Aging Treatment',
      description: 'Youthful glow restoration',
      before: 'Before: Fine lines visible',
      after: 'After: Smooth, youthful skin',
      rating: 5,
      likes: 178,
      image: '✨'
    },
    {
      id: 8,
      category: 'bridal',
      title: 'Modern Bridal Style',
      description: 'Contemporary bridal beauty',
      before: 'Before: Casual look',
      after: 'After: Modern bridal elegance',
      rating: 5,
      likes: 167,
      image: '👰'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning before and after transformations. See the magic we create every day at Royal Cut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-8xl">{item.image}</div>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Heart size={14} className="text-red-400 fill-current" />
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item.before}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item.after}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Transformation</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Salon Environment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Salon Environment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our clean, modern, and welcoming salon space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Reception Area', icon: '🏢', description: 'Welcoming entrance' },
              { title: 'Hair Styling', icon: '💇‍♀️', description: 'Professional stations' },
              { title: 'Facial Room', icon: '✨', description: 'Relaxing treatments' },
              { title: 'Bridal Suite', icon: '👰', description: 'Private bridal area' }
            ].map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{room.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 text-sm">{room.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations, real results, real satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya M.',
                service: 'Bridal Makeup',
                rating: 5,
                comment: 'Absolutely stunning bridal transformation! The team made me feel like a princess on my special day.',
                avatar: '👰'
              },
              {
                name: 'Anjali S.',
                service: 'Haircut & Styling',
                rating: 5,
                comment: 'Best haircut I\'ve ever had! The stylist understood exactly what I wanted and delivered perfectly.',
                avatar: '💇‍♀️'
              },
              {
                name: 'Meera K.',
                service: 'Facial Treatment',
                rating: 5,
                comment: 'My skin has never looked better! The facial treatment was relaxing and the results are amazing.',
                avatar: '✨'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-pink-600">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Book your appointment today and join our gallery of satisfied customers with stunning transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi! I'd like to book an appointment at Royal Cut."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
