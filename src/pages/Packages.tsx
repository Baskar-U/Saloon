import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, Gift, Calendar } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Bridal Package',
      price: '₹10,000',
      originalPrice: '₹15,000',
      duration: '4-5 hours',
      description: 'Complete bridal transformation for your special day',
      features: [
        'Professional bridal makeup',
        'Hair styling & accessories',
        'Facial treatment',
        'Saree draping',
        'Touch-up kit',
        'Pre-bridal consultation',
        'Bridal party makeup (2 people)'
      ],
      icon: '👰',
      popular: true,
      discount: '33% OFF'
    },
    {
      name: 'Membership Plan',
      price: '₹1000',
      originalPrice: '₹1250',
      duration: '5 sessions',
      description: 'Value pack for regular customers',
      features: [
        '5 Haircuts',
        'Valid for 6 months',
        'Priority booking',
        '10% off on additional services',
        'Free consultation',
        'Member-only offers'
      ],
      icon: '🎫',
      popular: false,
      discount: '20% OFF'
    },
    {
      name: 'Couple Package',
      price: '₹800',
      originalPrice: '₹1000',
      duration: '2-3 hours',
      description: 'Perfect for date nights and special occasions',
      features: [
        'Haircut for both',
        'Facial for both',
        'Manicure & Pedicure',
        'Couple photoshoot',
        'Refreshments',
        'Gift voucher'
      ],
      icon: '💑',
      popular: false,
      discount: '20% OFF'
    }
  ];

  const festivalOffers = [
    {
      name: 'Diwali Special',
      price: '₹2000',
      originalPrice: '₹3000',
      description: 'Glow up for the festival of lights',
      features: ['Facial', 'Hair styling', 'Manicure', 'Pedicure', 'Free gift'],
      icon: '🪔',
      validUntil: 'Nov 15, 2024',
      discount: '33% OFF'
    },
    {
      name: 'Pongal Package',
      price: '₹1500',
      originalPrice: '₹2000',
      description: 'Traditional beauty for harvest festival',
      features: ['Traditional hair styling', 'Facial', 'Threading', 'Nail art'],
      icon: '🌾',
      validUntil: 'Jan 20, 2024',
      discount: '25% OFF'
    },
    {
      name: 'Wedding Season',
      price: '₹3000',
      originalPrice: '₹4500',
      description: 'Perfect for wedding season celebrations',
      features: ['Party makeup', 'Hair styling', 'Facial', 'Accessories'],
      icon: '💒',
      validUntil: 'Dec 31, 2024',
      discount: '33% OFF'
    }
  ];

  const seasonalOffers = [
    {
      name: 'Summer Glow',
      price: '₹1200',
      originalPrice: '₹1800',
      description: 'Beat the heat with refreshing treatments',
      features: ['Cooling facial', 'Hair spa', 'Ice therapy', 'Sunscreen kit'],
      icon: '☀️',
      validUntil: 'Aug 31, 2024'
    },
    {
      name: 'Monsoon Care',
      price: '₹1000',
      originalPrice: '₹1500',
      description: 'Protect your skin during monsoon',
      features: ['Anti-fungal facial', 'Hair treatment', 'Nail care', 'Protection kit'],
      icon: '🌧️',
      validUntil: 'Sep 30, 2024'
    }
  ];

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
              Packages & Offers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our value-packed deals and seasonal offers designed to give you the best beauty experience at amazing prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated packages that offer maximum value and savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                  pkg.popular ? 'border-pink-500' : 'border-gray-200'
                } hover:shadow-xl transition-shadow duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl font-bold text-pink-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                        {pkg.discount}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
                      <Clock size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <Star size={14} className="text-pink-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/booking"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Book Package</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Festival Special Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrate festivals with our special beauty packages designed for the occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {festivalOffers.map((offer, index) => (
              <motion.div
                key={offer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 text-center">
                  <div className="text-4xl mb-2">{offer.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
                  <p className="text-sm opacity-90">{offer.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{offer.price}</span>
                    <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {offer.discount}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {offer.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <Gift size={14} className="text-orange-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Valid until:</span>
                    <span>{offer.validUntil}</span>
                  </div>
                  
                  <Link
                    to="/booking"
                    className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seasonal Specials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored treatments for every season to keep you looking your best year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <motion.div
                key={offer.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl">{offer.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.name}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-blue-600">{offer.price}</span>
                      <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {offer.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600">
                          <Star size={14} className="text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>Valid until: {offer.validUntil}</span>
                      </div>
                      <Link
                        to="/booking"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Membership Program
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Get exclusive benefits, priority booking, and special discounts as a member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priority Booking</h3>
              <p className="opacity-90">Get first access to appointments and special time slots</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
              <p className="opacity-90">Member-only discounts and seasonal specials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loyalty Rewards</h3>
              <p className="opacity-90">Earn points and get rewards for every visit</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/booking"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Become a Member</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Save on Beauty Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred package and start saving today. All packages include premium services at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Package</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Custom Package</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
