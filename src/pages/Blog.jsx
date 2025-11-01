import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

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

  // Show setup message if Supabase not configured
  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-cormorant text-5xl md:text-7xl text-deep-calm mb-6">
              Wellness Blog
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
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-cormorant text-5xl md:text-7xl text-deep-calm mb-6">
            Wellness Blog
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Insights, guidance, and inspiration for your wellness journey
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-sage-green/30 focus:outline-none focus:border-sage-green bg-white text-charcoal"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-sage-green text-white'
                  : 'bg-sage-green/10 text-deep-calm hover:bg-sage-green/20'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-sage-green text-white'
                    : 'bg-sage-green/10 text-deep-calm hover:bg-sage-green/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-sage-green border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-charcoal/60 text-lg">No articles found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  {/* Featured Image */}
                  {post.featured_image_url && (
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    {post.category && (
                      <span className="text-sage-green font-medium">
                        {post.category.name}
                      </span>
                    )}
                    <span className="text-charcoal/50">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-cormorant text-2xl md:text-3xl text-deep-calm mb-3 group-hover:text-sage-green transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-charcoal/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Author */}
                  {post.author && (
                    <div className="flex items-center gap-3">
                      {post.author.avatar_url && (
                        <img
                          src={post.author.avatar_url}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <span className="text-sm text-charcoal/60">
                        {post.author.name}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tagObj) => (
                        <span
                          key={tagObj.tag.slug}
                          className="text-xs px-3 py-1 bg-soft-sand/30 text-charcoal rounded-full"
                        >
                          #{tagObj.tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
