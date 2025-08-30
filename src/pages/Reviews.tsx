import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, Heart } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      service: 'Bridal Makeup',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely amazing experience! The bridal makeup was perfect and lasted throughout my wedding day. The team was professional and made me feel so comfortable. Highly recommended!',
      avatar: '👰',
      helpful: 24
    },
    {
      id: 2,
      name: 'Anjali Patel',
      service: 'Haircut & Styling',
      rating: 5,
      date: '1 week ago',
      comment: 'Best haircut I\'ve ever had! The stylist understood exactly what I wanted and gave me a modern, flattering cut. The salon is clean and the staff is friendly.',
      avatar: '💇‍♀️',
      helpful: 18
    },
    {
      id: 3,
      name: 'Meera Singh',
      service: 'Facial Treatment',
      rating: 5,
      date: '3 days ago',
      comment: 'My skin has never looked better! The facial treatment was relaxing and the results are incredible. My skin feels so smooth and glowing. Will definitely come back!',
      avatar: '✨',
      helpful: 31
    },
    {
      id: 4,
      name: 'Riya Gupta',
      service: 'Hair Spa',
      rating: 5,
      date: '5 days ago',
      comment: 'Excellent hair spa treatment! My hair feels so soft and healthy now. The massage was relaxing and the staff was very professional. Great value for money.',
      avatar: '🧖‍♀️',
      helpful: 15
    },
    {
      id: 5,
      name: 'Kavya Reddy',
      service: 'Party Makeup',
      rating: 5,
      date: '1 week ago',
      comment: 'Perfect party makeup! The makeup artist created a stunning look that was perfect for the occasion. The makeup stayed put all night and I received so many compliments.',
      avatar: '💄',
      helpful: 22
    },
    {
      id: 6,
      name: 'Sneha Kumar',
      service: 'Threading & Waxing',
      rating: 5,
      date: '4 days ago',
      comment: 'Very professional threading service. Clean and hygienic environment. The staff is skilled and the service was quick and painless. Highly recommend!',
      avatar: '🧵',
      helpful: 19
    }
  ];

  const stats = [
    { rating: 5, count: 156, percentage: 78 },
    { rating: 4, count: 32, percentage: 16 },
    { rating: 3, count: 8, percentage: 4 },
    { rating: 2, count: 2, percentage: 1 },
    { rating: 1, count: 2, percentage: 1 }
  ];

  const averageRating = 4.8;
  const totalReviews = 200;

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
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our satisfied customers have to say about their experience at Royal Cut
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <div className="text-6xl font-bold text-pink-600 mb-2">{averageRating}</div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on {totalReviews} reviews</p>
              </div>

              <div className="space-y-3">
                {stats.map((stat) => (
                  <div key={stat.rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium">{stat.rating}</span>
                      <Star size={16} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{stat.count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">🌟</div>
                <h3 className="text-2xl font-bold text-gray-800">Why Our Customers Love Us</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">98%</div>
                    <div className="text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">95%</div>
                    <div className="text-gray-600">Would Recommend</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">4.8</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">200+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from our valued customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{review.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-pink-600">{review.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote size={20} className="text-pink-200 mb-2" />
                  <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ThumbsUp size={14} />
                    <span>{review.helpful} found this helpful</span>
                  </div>
                  <button className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 text-sm">
                    <Heart size={14} />
                    <span>Like</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-6xl mb-4">👰</div>
              <h2 className="text-3xl font-bold mb-4">Featured Review</h2>
              <blockquote className="text-xl italic mb-6 max-w-3xl mx-auto">
                "Royal Cut made my wedding day absolutely perfect! The bridal makeup was stunning and lasted throughout the entire celebration. The team was professional, caring, and made me feel like a princess. I couldn't have asked for a better experience!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-2xl">💕</div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-sm opacity-90">Bridal Makeup Client</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reviews by Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what customers say about specific services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { service: 'Haircuts', rating: 4.9, reviews: 45, icon: '💇‍♀️' },
              { service: 'Facial', rating: 4.8, reviews: 38, icon: '✨' },
              { service: 'Bridal Makeup', rating: 5.0, reviews: 25, icon: '👰' },
              { service: 'Hair Spa', rating: 4.7, reviews: 32, icon: '🧖‍♀️' }
            ].map((category, index) => (
              <motion.div
                key={category.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.service}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.floor(category.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-pink-600 mb-1">{category.rating}</div>
                <div className="text-sm text-gray-600">{category.reviews} reviews</div>
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
              Join Our Happy Customers
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Experience the same level of excellence that our customers rave about. Book your appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi! I'd like to book an appointment at Royal Cut."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <Star size={20} />
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

export default Reviews;
