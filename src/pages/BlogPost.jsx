import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../lib/supabase';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        author:authors(name, bio, avatar_url),
        category:categories(name, slug),
        tags:blog_post_tags(tag:tags(name, slug))
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching post:', error);
    } else {
      setPost(data);
      if (data.category_id) {
        fetchRelatedPosts(data.category_id, data.id);
      }
    }
    setLoading(false);
  };

  const fetchRelatedPosts = async (categoryId, currentPostId) => {
    const { data } = await supabase
      .from('blog_posts')
      .select('id, title, slug, featured_image_url, published_at')
      .eq('category_id', categoryId)
      .eq('status', 'published')
      .neq('id', currentPostId)
      .limit(3);

    if (data) setRelatedPosts(data);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-sage-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant text-deep-calm mb-4">Post not found</h1>
          <Link to="/blog" className="text-sage-green hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        {post.featured_image_url && (
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/80 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.category && (
                <span className="inline-block px-4 py-2 bg-sage-green text-white rounded-full text-sm mb-4">
                  {post.category.name}
                </span>
              )}

              <h1 className="font-cormorant text-4xl md:text-6xl text-white mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-soft-sand/90">
                {post.author && (
                  <div className="flex items-center gap-3">
                    {post.author.avatar_url && (
                      <img
                        src={post.author.avatar_url}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full border-2 border-white/30"
                      />
                    )}
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                )}
                <span>
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none
            prose-headings:font-cormorant prose-headings:text-deep-calm
            prose-p:text-charcoal/80 prose-p:leading-relaxed
            prose-a:text-sage-green prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg prose-img:shadow-lg"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-charcoal/10">
            {post.tags.map((tagObj) => (
              <span
                key={tagObj.tag.slug}
                className="px-4 py-2 bg-soft-sand/30 text-charcoal rounded-full text-sm"
              >
                #{tagObj.tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="mt-12 p-8 bg-sage-green/5 rounded-lg">
            <div className="flex items-start gap-6">
              {post.author.avatar_url && (
                <img
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full"
                />
              )}
              <div>
                <h3 className="font-cormorant text-2xl text-deep-calm mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-charcoal/70">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-soft-sand/20 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-cormorant text-4xl text-deep-calm mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group"
                >
                  {related.featured_image_url && (
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={related.featured_image_url}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h3 className="font-cormorant text-xl text-deep-calm group-hover:text-sage-green transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
