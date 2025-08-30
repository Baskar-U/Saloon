import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Haircut',
      price: '₹250',
      duration: '30-45 min',
      description: 'Professional haircut with styling consultation',
      features: ['Professional consultation', 'Wash & blow dry', 'Styling tips'],
      icon: '💇‍♀️',
      popular: false
    },
    {
      name: 'Shave',
      price: '₹100',
      duration: '15-20 min',
      description: 'Traditional shaving service with hot towel',
      features: ['Hot towel treatment', 'Premium shaving cream', 'After-shave lotion'],
      icon: '✂️',
      popular: false
    },
    {
      name: 'Facial',
      price: '₹1000',
      duration: '60-75 min',
      description: 'Rejuvenating facial treatment for all skin types',
      features: ['Deep cleansing', 'Exfoliation', 'Moisturizing mask', 'Face massage'],
      icon: '✨',
      popular: true
    },
    {
      name: 'Bridal Makeup',
      price: '₹5000',
      duration: '2-3 hours',
      description: 'Complete bridal makeup package for your special day',
      features: ['Professional makeup', 'Hair styling', 'Touch-up kit', 'Pre-bridal consultation'],
      icon: '👰',
      popular: false
    },
    {
      name: 'Hair Spa',
      price: '₹1500',
      duration: '90-120 min',
      description: 'Deep conditioning treatment for healthy hair',
      features: ['Deep conditioning', 'Scalp massage', 'Hair mask', 'Blow dry'],
      icon: '🧖‍♀️',
      popular: false
    },
    {
      name: 'Threading',
      price: '₹150',
      duration: '15-20 min',
      description: 'Precise eyebrow and face threading',
      features: ['Eyebrow shaping', 'Face threading', 'Aloe vera gel'],
      icon: '🧵',
      popular: false
    },
    {
      name: 'Waxing',
      price: '₹300',
      duration: '30-45 min',
      description: 'Professional waxing services',
      features: ['Premium wax', 'Pre & post care', 'Moisturizing lotion'],
      icon: '🪶',
      popular: false
    },
    {
      name: 'Manicure',
      price: '₹400',
      duration: '45-60 min',
      description: 'Complete nail care and polish',
      features: ['Nail shaping', 'Cuticle care', 'Polish application', 'Hand massage'],
      icon: '💅',
      popular: false
    },
    {
      name: 'Pedicure',
      price: '₹600',
      duration: '60-75 min',
      description: 'Comprehensive foot care and polish',
      features: ['Foot soak', 'Nail care', 'Callus removal', 'Foot massage'],
      icon: '🦶',
      popular: false
    }
  ];

  const categories = [
    {
      name: 'Hair Services',
      services: ['Haircut', 'Hair Spa', 'Bridal Makeup'],
      icon: '💇‍♀️'
    },
    {
      name: 'Skin Care',
      services: ['Facial', 'Threading', 'Waxing'],
      icon: '✨'
    },
    {
      name: 'Nail Care',
      services: ['Manicure', 'Pedicure'],
      icon: '💅'
    },
    {
      name: 'Men Services',
      services: ['Haircut', 'Shave'],
      icon: '👨'
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
              Our Services & Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty. 
              All prices are transparent with no hidden charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {category.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Service Menu
          </h2>
          
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6">
                <h3 className="text-xl font-semibold">Service Pricing</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {services.map((service, index) => (
                      <tr key={service.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{service.name}</div>
                              {service.popular && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                  Popular
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{service.description}</div>
                          <div className="mt-2">
                            <ul className="text-xs text-gray-600 space-y-1">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                  <Star size={12} className="text-pink-400 mr-1" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                            <Clock size={14} />
                            <span>{service.duration}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-pink-600">{service.price}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            to="/booking"
                            className="inline-flex items-center space-x-1 text-pink-600 hover:text-pink-700 font-semibold text-sm"
                          >
                            <span>Book Now</span>
                            <ArrowRight size={14} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    <div className="flex items-center justify-end space-x-1 text-sm text-gray-600 mt-1">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <Star size={12} className="text-pink-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/booking"
                  className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also offer specialized services and can customize packages according to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Packages</h3>
              <p className="text-gray-600 mb-4">Create your own combination of services</p>
              <Link
                to="/contact"
                className="text-pink-600 hover:text-pink-700 font-semibold"
              >
                Contact for Quote
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Services</h3>
              <p className="text-gray-600 mb-4">We come to you for special occasions</p>
              <Link
                to="/contact"
                className="text-pink-600 hover:text-pink-700 font-semibold"
              >
                Book Home Service
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Party Packages</h3>
              <p className="text-gray-600 mb-4">Group bookings for events and parties</p>
              <Link
                to="/contact"
                className="text-pink-600 hover:text-pink-700 font-semibold"
              >
                Get Quote
              </Link>
            </div>
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Choose your preferred service and book your appointment today. 
              We offer flexible scheduling and same-day bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/packages"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Packages</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
