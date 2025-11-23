import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import SEO from '../components/SEO';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, [selectedCategory]);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    if (data) setCategories(data);
  };

  const fetchPosts = async () => {
    setLoading(true);
    let query = supabase
      .from('blog_posts')
      .select(`
        *,
        author:authors(name, avatar_url),
        category:categories(name, slug),
        tags:blog_post_tags(tag:tags(name, slug))
      `)
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        query = query.eq('category_id', category.id);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Use dummy posts if Supabase not configured
  useEffect(() => {
    if (!isSupabaseConfigured) {
      setPosts([
        {
          id: 1,
          slug: 'start-your-wellbeing-journey',
          title: '5 Ways to Start Your Wellbeing Journey Today',
          excerpt: 'Discover simple, science-backed strategies to begin your transformation toward a healthier, more balanced life.',
          featured_image_url: '/images/malak-vision-board.jpg',
          published_at: '2025-01-15',
          read_time: 5,
          author: { name: 'Malak Alsaffar', avatar_url: '/images/malak.jpeg' },
          category: { name: 'Wellbeing', slug: 'wellbeing' },
          tags: [
            { tag: { name: 'Mindfulness', slug: 'mindfulness' } },
            { tag: { name: 'Health', slug: 'health' } }
          ]
        },
        {
          id: 2,
          slug: 'meditation-for-high-performers',
          title: 'Meditation Techniques for High Performers',
          excerpt: 'Learn how top achievers use meditation to enhance focus, reduce stress, and improve decision-making.',
          featured_image_url: '/images/blog-meditation.jpg',
          published_at: '2025-01-10',
          read_time: 7,
          author: { name: 'Wesley Depass', avatar_url: '/images/wesley.jpeg' },
          category: { name: 'Mindfulness', slug: 'mindfulness' },
          tags: [
            { tag: { name: 'Meditation', slug: 'meditation' } },
            { tag: { name: 'Performance', slug: 'performance' } }
          ]
        },
        {
          id: 3,
          slug: 'science-backed-fitness-training',
          title: 'The Science Behind Effective Fitness Training',
          excerpt: 'Explore evidence-based approaches to strength training that deliver real results without burnout.',
          featured_image_url: '/images/blog-fitness.jpg',
          published_at: '2025-01-05',
          read_time: 8,
          author: { name: 'Wesley Depass', avatar_url: '/images/wesley.jpeg' },
          category: { name: 'Fitness', slug: 'fitness' },
          tags: [
            { tag: { name: 'Training', slug: 'training' } },
            { tag: { name: 'Science', slug: 'science' } }
          ]
        }
      ]);
      setLoading(false);
    }
  }, []);

  // Original Supabase code continues
  if (false && !isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-cormorant text-5xl md:text-7xl text-deep-calm mb-6">
              Wellbeing Blog
            </h1>
            <div className="bg-sage-green/10 border border-sage-green/30 rounded-lg p-8 text-left">
              <h2 className="text-2xl font-cormorant text-deep-calm mb-4">
                🚀 Blog Setup Required
              </h2>
              <p className="text-charcoal/70 mb-4">
                The blog system is ready, but needs to be connected to Supabase.
              </p>
              <div className="space-y-3 text-sm text-charcoal/80">
                <p><strong>Follow these steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Read <code className="bg-charcoal/10 px-2 py-1 rounded">SUPABASE_SETUP.md</code> in the project root</li>
                  <li>Create a free account at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-sage-green hover:underline">supabase.com</a></li>
                  <li>Create a new project and get your API keys</li>
                  <li>Create a <code className="bg-charcoal/10 px-2 py-1 rounded">.env</code> file with your credentials</li>
                  <li>Run the database schema from <code className="bg-charcoal/10 px-2 py-1 rounded">supabase-schema.sql</code></li>
                  <li>Restart the dev server</li>
                </ol>
              </div>
              <div className="mt-6 p-4 bg-soft-sand/30 rounded">
                <p className="text-xs text-charcoal/60">
                  💡 <strong>Tip:</strong> Setup takes about 5 minutes. Your blog will have full CMS capabilities!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Wellbeing Blog - The Elevate Collective | Mindfulness, Fitness & Mental Health"
        description="Explore our wellbeing blog featuring insights on mindfulness, strength training, mental health, and holistic living. Expert advice for high performers in Dubai and UAE."
        keywords="wellbeing blog, mindfulness tips, fitness advice, mental health, Dubai wellbeing, holistic living, meditation guides, strength training tips"
        image="https://theelevatecolective.com/images/brand/blog-og-image.jpg"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-soft-sand/10 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h1 className="font-cormorant text-6xl md:text-8xl text-deep-calm mb-8 tracking-tight">
            Wellbeing Journal
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/60 max-w-3xl mx-auto leading-relaxed font-light">
            Insights, guidance, and inspiration for your wellbeing journey
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-20 space-y-8 max-w-4xl mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-5 rounded-2xl border border-sage-green/20 focus:outline-none focus:border-sage-green/40 bg-white/80 backdrop-blur-sm text-charcoal text-lg shadow-sm transition-all duration-300 group-hover:shadow-md focus:shadow-lg"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-charcoal/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium tracking-wide ${
                selectedCategory === 'all'
                  ? 'bg-sage-green text-white shadow-lg shadow-sage-green/30 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-deep-calm hover:bg-sage-green/10 hover:scale-105 border border-sage-green/20'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium tracking-wide ${
                  selectedCategory === category.slug
                    ? 'bg-sage-green text-white shadow-lg shadow-sage-green/30 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-deep-calm hover:bg-sage-green/10 hover:scale-105 border border-sage-green/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-32">
            <div className="inline-block w-16 h-16 border-4 border-sage-green/30 border-t-sage-green rounded-full animate-spin"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-charcoal/50 text-xl font-light">No articles found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Featured Image */}
                  {post.featured_image_url && (
                    <div className="aspect-[4/3] mb-6 overflow-hidden rounded-3xl bg-soft-sand/20 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <img
                        src={post.featured_image_url}
                        alt={`${post.title} - The Elevate Collective wellbeing blog`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider">
                      {post.category && (
                        <span className="text-sage-green font-semibold">
                          {post.category.name}
                        </span>
                      )}
                      <span className="text-charcoal/40">•</span>
                      <span className="text-charcoal/50 font-medium">
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-cormorant text-3xl md:text-4xl text-deep-calm leading-tight group-hover:text-sage-green transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-charcoal/60 leading-relaxed line-clamp-3 font-light text-base">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Author & Read Time */}
                    <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                      {post.author && (
                        <div className="flex items-center gap-3">
                          {post.author.avatar_url && (
                            <img
                              src={post.author.avatar_url}
                              alt={`${post.author.name} - Wellbeing coach and author at The Elevate Collective`}
                              className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
                              loading="lazy"
                            />
                          )}
                          <div>
                            <span className="text-sm text-charcoal/80 font-medium block">
                              {post.author.name}
                            </span>
                            {post.read_time && (
                              <span className="text-xs text-charcoal/50">
                                {post.read_time} min read
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Read More Arrow */}
                      <div className="text-sage-green opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Blog;
