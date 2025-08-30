import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Mail, Clock, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Senior Beautician',
      experience: '8+ years',
      specialties: ['Bridal Makeup', 'Hair Styling', 'Facial Treatments'],
      image: '👩‍💼'
    },
    {
      name: 'Anjali Patel',
      role: 'Hair Specialist',
      experience: '6+ years',
      specialties: ['Haircuts', 'Hair Spa', 'Hair Coloring'],
      image: '💇‍♀️'
    },
    {
      name: 'Meera Singh',
      role: 'Skin Care Expert',
      experience: '5+ years',
      specialties: ['Facial Treatments', 'Threading', 'Waxing'],
      image: '✨'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Services Offered', icon: Star },
    { number: '4.8', label: 'Star Rating', icon: Star }
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
              About Royal Cut
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted beauty destination for over 5 years, providing premium salon services with a commitment to excellence and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Royal Cut was founded with a simple mission: to provide exceptional beauty services in a welcoming, professional environment. What started as a small beauty parlor has grown into one of the most trusted names in beauty care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a passion for making people feel beautiful and confident. Today, we continue to uphold the same values of quality, hygiene, and customer satisfaction that made us successful from day one.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that beauty is not just about looking good, but feeling good too. That's why we use only premium products and maintain the highest standards of hygiene and professionalism in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600">
                    To enhance your natural beauty and boost your confidence through professional, hygienic, and personalized beauty services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Royal Cut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From products to services, we ensure the best for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hygiene</h3>
              <p className="text-gray-600">
                Your safety is our priority. We maintain strict hygiene standards and sanitize all equipment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our success. We listen, understand, and deliver exactly what you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced and certified beauticians are here to make you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience} experience</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Specialties:</h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty) => (
                      <li key={specialty} className="text-sm text-gray-600">
                        • {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={32} className="text-pink-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located in the heart of the city with easy accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Beauty Street, City Center<br />
                      Near Central Mall, 600001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@salonelegance.com"
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      info@salonelegance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-pink-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Location?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Central location with easy parking</li>
                  <li>• Well-connected by public transport</li>
                  <li>• Safe and secure neighborhood</li>
                  <li>• Nearby shopping and dining options</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin size={48} className="text-gray-400 mx-auto" />
                  <p className="text-gray-600">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">
                    Interactive map showing salon location<br />
                    (Would be replaced with actual Google Maps embed)
                  </p>
                </div>
              </div>
            </motion.div>
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
              Ready to Experience Royal Cut?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Book your appointment today and discover why hundreds of customers trust us with their beauty needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi! I'd like to book an appointment at Royal Cut."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
