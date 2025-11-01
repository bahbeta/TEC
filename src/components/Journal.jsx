import Section from './Section';
import { motion } from 'framer-motion';

const Journal = () => {
  const articles = [
    {
      title: 'Ambition vs Burnout',
      subtitle: 'Finding the Balance in High-Performance Living',
      excerpt: 'Success doesn\'t require sacrifice. Learn how high performers sustain their drive without compromising well-being.',
      image: '/src/assets/images/img-090.jpg',
      readTime: '8 min read',
      category: 'Mindset',
    },
    {
      title: 'The Science of Recovery',
      subtitle: 'Why Rest is Your Greatest Performance Tool',
      excerpt: 'Elite athletes know the secret: recovery isn\'t passive—it\'s strategic. Discover how intentional rest accelerates growth.',
      image: '/src/assets/images/img-091.jpg',
      readTime: '6 min read',
      category: 'Performance',
    },
    {
      title: 'Mind in Motion',
      subtitle: 'The Philosophy Behind Our Practice',
      excerpt: 'Movement without mindfulness is exercise. Movement with intention is transformation. Explore our approach to integrated wellness.',
      image: '/src/assets/images/img-092.jpg',
      readTime: '10 min read',
      category: 'Philosophy',
    },
  ];

  return (
    <Section id="journal" background="cloud-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="!mb-6">The Journal</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-deep-calm/70 max-w-3xl mx-auto leading-relaxed">
            Insights on performance, recovery, and intentional living
          </p>
        </motion.div>

        {/* Featured Article - Large Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden apple-shadow-xl group cursor-pointer">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-calm via-deep-calm/60 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl">
                <span className="inline-block text-sm font-medium text-terracotta bg-terracotta/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  {articles[0].category}
                </span>
                <h3 className="text-cloud-white !text-4xl md:!text-5xl lg:!text-6xl !mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-2xl md:text-3xl font-display text-warm-sand mb-6 leading-tight">
                  {articles[0].subtitle}
                </p>
                <p className="text-lg text-cloud-white/90 mb-6 leading-relaxed max-w-2xl">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-cloud-white/70 text-sm">{articles[0].readTime}</span>
                  <motion.a
                    href="#read"
                    whileHover={{ x: 5 }}
                    className="text-cloud-white font-medium flex items-center gap-2"
                  >
                    Read Article
                    <span>→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative h-[350px] rounded-2xl overflow-hidden mb-6 apple-shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-sm font-medium text-cloud-white bg-terracotta px-4 py-2 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div>
                <h4 className="text-deep-calm !text-2xl lg:!text-3xl !mb-3 group-hover:text-terracotta transition-colors duration-300">
                  {article.title}
                </h4>
                <p className="text-xl font-display text-deep-calm/80 mb-4 leading-tight">
                  {article.subtitle}
                </p>
                <p className="text-deep-calm/70 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-deep-calm/60 text-sm">{article.readTime}</span>
                  <motion.a
                    href="#read"
                    whileHover={{ x: 5 }}
                    className="text-terracotta font-medium flex items-center gap-2"
                  >
                    Read More
                    <span>→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#journal-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 border-2 border-deep-calm text-deep-calm font-medium rounded-full hover:bg-deep-calm hover:text-cloud-white transition-all duration-300"
          >
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Journal;
