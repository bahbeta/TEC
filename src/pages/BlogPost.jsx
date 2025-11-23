import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Dummy blog posts data
  const dummyPosts = {
    'start-your-wellbeing-journey': {
      id: 1,
      slug: 'start-your-wellbeing-journey',
      title: '5 Ways to Start Your Wellbeing Journey Today',
      excerpt: 'Discover simple, science-backed strategies to begin your transformation toward a healthier, more balanced life.',
      featured_image_url: '/images/malak-vision-board.jpg',
      published_at: '2025-01-15',
      read_time: 5,
      author: {
        name: 'Malak Alsaffar',
        avatar_url: '/images/malak.jpeg',
        bio: 'Wellbeing advocate and mindfulness coach specialising in holistic health and sustainable lifestyle transformations.'
      },
      category: { name: 'Wellbeing', slug: 'wellbeing' },
      tags: [
        { tag: { name: 'Mindfulness', slug: 'mindfulness' } },
        { tag: { name: 'Health', slug: 'health' } }
      ],
      content: `# Starting Your Wellbeing Journey

Embarking on a wellbeing journey doesn't require a complete life overhaul. The most sustainable transformations begin with small, intentional steps that compound over time. Here are five evidence-based strategies to help you begin today.

## 1. Establish a Morning Ritual

The way you start your day sets the tone for everything that follows. Create a simple morning routine that nourishes your mind and body:

- Wake up 15 minutes earlier than usual
- Drink a full glass of water before anything else
- Spend 5 minutes in meditation or deep breathing
- Write down three things you're grateful for

This ritual doesn't need to be complex or time-consuming. Consistency matters more than perfection.

## 2. Move Your Body Daily

Physical movement is essential for both physical and mental wellbeing. You don't need a gym membership or expensive equipment to get started:

- Take a 20-minute walk in nature
- Practice gentle yoga or stretching
- Dance to your favorite music
- Try bodyweight exercises at home

The key is finding movement that feels enjoyable rather than obligatory. When exercise becomes play, consistency becomes effortless.

## 3. Nourish Yourself Mindfully

Wellbeing isn't about restrictive diets—it's about developing a healthy relationship with food. Practice mindful eating by:

- Eating without distractions (no screens)
- Chewing slowly and savoring each bite
- Paying attention to hunger and fullness cues
- Choosing whole, unprocessed foods when possible

Small improvements in your eating habits create significant long-term benefits.

## 4. Prioritize Quality Sleep

Sleep is the foundation of wellbeing. Without adequate rest, every other aspect of health suffers. Improve your sleep by:

- Maintaining consistent sleep and wake times
- Creating a cool, dark sleeping environment
- Avoiding screens for an hour before bed
- Limiting caffeine after 2 PM

Most adults need 7-9 hours of sleep per night. Make this a non-negotiable priority.

## 5. Connect with Community

Wellbeing flourishes in community. Social connection is as vital to health as nutrition and exercise. Foster meaningful relationships by:

- Scheduling regular time with loved ones
- Joining a wellbeing-focused group or class
- Volunteering for causes you care about
- Being vulnerable and authentic in your connections

The Elevate Collective provides a supportive community for those committed to sustainable wellbeing practices.

## Taking the First Step

Remember, your wellbeing journey is uniquely yours. Start with one or two practices that resonate most deeply, then gradually build from there. Progress isn't linear, and every small step forward matters.

What will your first step be today?`
    },
    'meditation-for-high-performers': {
      id: 2,
      slug: 'meditation-for-high-performers',
      title: 'Meditation Techniques for High Performers',
      excerpt: 'Learn how top achievers use meditation to enhance focus, reduce stress, and improve decision-making.',
      featured_image_url: '/images/blog-meditation.jpg',
      published_at: '2025-01-10',
      read_time: 7,
      author: {
        name: 'Wesley Depass',
        avatar_url: '/images/wesley.jpeg',
        bio: 'Performance coach and meditation teacher helping high achievers integrate mindfulness practices into demanding lifestyles.'
      },
      category: { name: 'Mindfulness', slug: 'mindfulness' },
      tags: [
        { tag: { name: 'Meditation', slug: 'meditation' } },
        { tag: { name: 'Performance', slug: 'performance' } }
      ],
      content: `# Meditation for Peak Performance

In the fast-paced world of high achievement, meditation isn't a luxury—it's a competitive advantage. Top performers across industries use meditation to sharpen focus, manage stress, and make better decisions under pressure.

## Why High Performers Meditate

The most successful people understand that mental clarity drives performance. Meditation provides:

- **Enhanced focus and concentration**: Train your attention like a muscle
- **Improved emotional regulation**: Respond rather than react to challenges
- **Better decision-making**: Access clearer thinking in critical moments
- **Reduced stress and anxiety**: Maintain composure under pressure
- **Increased creativity**: Create space for innovative solutions

## Technique 1: Box Breathing for Instant Calm

Box breathing is used by Navy SEALs and elite athletes to maintain composure in high-stakes situations.

**How to practice:**
1. Inhale for 4 counts
2. Hold for 4 counts
3. Exhale for 4 counts
4. Hold for 4 counts
5. Repeat for 5 minutes

Use this technique before important meetings, presentations, or any time you need to center yourself quickly.

## Technique 2: Body Scan for Stress Release

High performers often hold tension in their bodies without realizing it. A body scan meditation releases this accumulated stress.

**How to practice:**
1. Lie down or sit comfortably
2. Close your eyes and take three deep breaths
3. Bring attention to your feet, noticing any sensations
4. Slowly move your awareness up through your body
5. When you notice tension, breathe into that area
6. Continue until you've scanned your entire body

Practice this before bed to improve sleep quality and recovery.

## Technique 3: Focused Attention Meditation

This foundational practice builds the concentration necessary for sustained high performance.

**How to practice:**
1. Set a timer for 10-20 minutes
2. Choose an anchor (breath, mantra, or object)
3. Focus all attention on your chosen anchor
4. When your mind wanders, gently return to the anchor
5. Repeat this process without judgment

Start with 10 minutes daily and gradually increase. The act of returning your attention is where the benefit lies.

## Technique 4: Visualization for Goal Achievement

Elite athletes and performers use visualization to mentally rehearse success.

**How to practice:**
1. Get into a relaxed state through breathing
2. Vividly imagine achieving your goal
3. Engage all five senses in the visualization
4. Feel the emotions of success in your body
5. Practice this daily for 5-10 minutes

Visualization primes your nervous system for actual performance.

## Technique 5: Loving-Kindness for Resilience

Compassion meditation builds emotional resilience and improves relationships—essential for sustained high performance.

**How to practice:**
1. Sit comfortably and close your eyes
2. Bring someone you care about to mind
3. Silently repeat: "May you be happy, healthy, safe, and at ease"
4. Extend this to yourself, then to neutral people, then to difficult people
5. Finally, extend it to all beings

This practice transforms your relationship with challenges and setbacks.

## Building a Sustainable Practice

Start small and be consistent. Five minutes daily beats an hour once a week. Many high performers meditate:

- First thing in the morning to set the day's tone
- Before important events or meetings
- During transition times (between tasks)
- In the evening to process the day

## Integrating Meditation into Your Performance Protocol

Meditation isn't separate from performance—it enhances every aspect of it. The Elevate Collective offers guided meditation sessions and workshops designed specifically for high performers.

Your next level of achievement begins with the clarity that comes from a trained mind.

Ready to elevate your practice?`
    },
    'science-backed-fitness-training': {
      id: 3,
      slug: 'science-backed-fitness-training',
      title: 'The Science Behind Effective Fitness Training',
      excerpt: 'Explore evidence-based approaches to strength training that deliver real results without burnout.',
      featured_image_url: '/images/blog-fitness.jpg',
      published_at: '2025-01-05',
      read_time: 8,
      author: {
        name: 'Wesley Depass',
        avatar_url: '/images/wesley.jpeg',
        bio: 'Performance coach and meditation teacher helping high achievers integrate mindfulness practices into demanding lifestyles.'
      },
      category: { name: 'Fitness', slug: 'fitness' },
      tags: [
        { tag: { name: 'Training', slug: 'training' } },
        { tag: { name: 'Science', slug: 'science' } }
      ],
      content: `# The Science of Effective Training

Fitness culture is filled with contradictory advice, trendy programs, and unsustainable approaches. But when we examine the research, clear principles emerge that guide effective, sustainable training practices.

## The Fundamentals: What the Research Shows

Decades of exercise science reveal several non-negotiable principles for effective fitness training:

### Progressive Overload

Your body adapts to imposed demands. To continue improving, you must gradually increase:
- Weight lifted
- Repetitions performed
- Training volume
- Exercise complexity

The key word is **gradually**. Sustainable progress beats dramatic intensity.

### Recovery is Training

Muscles don't grow in the gym—they grow during recovery. Research shows:
- Most people need 48-72 hours between training the same muscle groups
- Sleep quality directly impacts training adaptation
- Active recovery (light movement) often beats complete rest
- Chronic under-recovery leads to diminished returns and injury

Elite athletes understand that recovery isn't passive—it's an active part of their training protocol.

## Strength Training: The Foundation

Resistance training provides benefits that extend far beyond aesthetics:

- **Increased bone density**: Reduces osteoporosis risk
- **Improved metabolic health**: Builds muscle that burns calories at rest
- **Enhanced functional capacity**: Makes daily activities easier
- **Better mental health**: Reduces anxiety and depression
- **Injury prevention**: Strengthens connective tissues

### Optimal Training Frequency

Research suggests 2-4 strength training sessions per week for most people. More isn't always better—quality and consistency beat volume.

### The Compound Movement Priority

Focus on exercises that use multiple muscle groups:
- Squats and variations
- Deadlifts and hip hinges
- Pressing movements (bench, overhead)
- Pulling movements (rows, pull-ups)

These provide the most efficiency and functional benefit.

## Cardiovascular Training: Beyond the Treadmill

Effective cardio training involves more than steady-state endurance work.

### The 80/20 Principle

Elite endurance athletes spend approximately:
- **80% of training** in Zone 2 (conversational pace)
- **20% of training** in higher intensity zones

This distribution maximizes aerobic development while managing fatigue.

### High-Intensity Interval Training (HIIT)

HIIT provides significant benefits in minimal time:
- Improved cardiovascular fitness
- Enhanced metabolic flexibility
- Time-efficient training option

However, true HIIT is extremely demanding. Most people benefit from 1-2 HIIT sessions per week, not daily.

## Movement Quality Over Quantity

Perfect practice makes perfect. Poor movement patterns repeated under load create injury risk.

### Key Principles:
1. **Master bodyweight movements** before adding load
2. **Prioritize full range of motion** when possible
3. **Control the eccentric** (lowering) portion of lifts
4. **Maintain neutral spine** during compound movements

Consider working with a qualified coach to refine technique—it's an investment that pays lifelong dividends.

## Periodization: The Long Game

Effective training varies across time periods:

**Mesocycles (4-6 weeks)**: Focus on specific adaptations
- Strength
- Hypertrophy (muscle growth)
- Power
- Endurance

**Deload weeks**: Periodic reduction in training volume
- Every 4-6 weeks
- Maintains adaptation without burnout
- Prevents overtraining syndrome

## Nutrition: The Training Multiplier

No amount of training compensates for inadequate nutrition:

### Protein
- Consume 0.7-1g per pound of bodyweight
- Distribute across 3-4 meals
- Essential for muscle repair and growth

### Carbohydrates
- Primary fuel for high-intensity training
- Timing matters around workouts
- Quality sources support performance

### Hydration
- Even mild dehydration impairs performance
- Aim for 0.5-1 oz per pound of bodyweight
- More on training days

## Sleep: The Ultimate Performance Enhancer

Sleep is when adaptation happens. Research shows:
- 7-9 hours for most adults
- Consistency matters as much as duration
- Poor sleep reduces strength, endurance, and recovery

Prioritize sleep as seriously as your training sessions.

## Building Your Training Protocol

Effective training isn't complex—it's consistent application of fundamental principles:

1. Train 3-5 days per week
2. Include strength and cardiovascular work
3. Prioritize movement quality
4. Recover intentionally
5. Fuel and hydrate properly
6. Sleep adequately

## The Elevate Approach

At The Elevate Collective, we integrate evidence-based training principles with mindful movement practices. Our programs deliver real results without burnout, injury, or unsustainable demands.

Sustainable fitness isn't about perfection—it's about consistent, intentional practice aligned with research-backed principles.

Ready to train smarter, not just harder?`
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);

    // Use dummy posts if Supabase not configured
    if (!isSupabaseConfigured) {
      const dummyPost = dummyPosts[slug];
      if (dummyPost) {
        setPost(dummyPost);
        // Set related posts from other dummy posts
        const related = Object.values(dummyPosts)
          .filter(p => p.slug !== slug && p.category.slug === dummyPost.category.slug)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setLoading(false);
      return;
    }

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
      <div className="min-h-screen bg-gradient-to-b from-white via-soft-sand/10 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-sage-green/30 border-t-sage-green rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-soft-sand/10 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-cormorant text-deep-calm mb-6">Post not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sage-green hover:gap-4 transition-all duration-300 text-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-soft-sand/5 to-white">
      {/* Back Button */}
      <div className="fixed top-24 left-6 md:left-12 z-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-deep-calm hover:text-sage-green border border-sage-green/10 hover:border-sage-green/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Journal</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {post.featured_image_url && (
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={post.featured_image_url}
            alt={`${post.title} - The Elevate Collective wellbeing blog`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-calm via-deep-calm/50 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {post.category && (
                <span className="inline-block px-5 py-2 bg-sage-green/90 backdrop-blur-sm text-white rounded-full text-xs uppercase tracking-wider font-semibold mb-6 shadow-lg">
                  {post.category.name}
                </span>
              )}

              <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-8 text-soft-sand/90">
                {post.author && (
                  <div className="flex items-center gap-4">
                    {post.author.avatar_url && (
                      <img
                        src={post.author.avatar_url}
                        alt={`${post.author.name} - Wellbeing coach and author at The Elevate Collective`}
                        className="w-14 h-14 rounded-full border-2 border-white/40 shadow-lg"
                        loading="eager"
                      />
                    )}
                    <div>
                      <span className="font-medium text-lg block">{post.author.name}</span>
                      {post.read_time && (
                        <span className="text-sm text-soft-sand/70">{post.read_time} min read</span>
                      )}
                    </div>
                  </div>
                )}
                <span className="text-soft-sand/70">•</span>
                <span className="text-lg">
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
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-xl max-w-none
            prose-headings:font-cormorant prose-headings:text-deep-calm prose-headings:tracking-tight
            prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-16
            prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
            prose-p:text-charcoal/80 prose-p:leading-loose prose-p:mb-6 prose-p:font-light prose-p:text-lg
            prose-a:text-sage-green prose-a:no-underline hover:prose-a:underline prose-a:transition-all
            prose-strong:text-deep-calm prose-strong:font-semibold
            prose-ul:my-8 prose-ul:space-y-3
            prose-li:text-charcoal/80 prose-li:leading-relaxed prose-li:font-light
            prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-16 pt-12 border-t border-charcoal/5"
          >
            {post.tags.map((tagObj) => (
              <span
                key={tagObj.tag.slug}
                className="px-5 py-2 bg-soft-sand/40 text-charcoal/70 rounded-full text-sm font-medium hover:bg-sage-green/10 hover:text-sage-green transition-all duration-300 cursor-default"
              >
                #{tagObj.tag.name}
              </span>
            ))}
          </motion.div>
        )}

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 p-10 bg-gradient-to-br from-sage-green/5 to-soft-sand/20 rounded-3xl border border-sage-green/10 shadow-lg"
          >
            <div className="flex items-start gap-6">
              {post.author.avatar_url && (
                <img
                  src={post.author.avatar_url}
                  alt={`${post.author.name} - Wellbeing coach and author at The Elevate Collective`}
                  className="w-24 h-24 rounded-full ring-4 ring-white shadow-xl"
                  loading="lazy"
                />
              )}
              <div className="flex-1">
                <h3 className="font-cormorant text-3xl text-deep-calm mb-3">
                  About {post.author.name}
                </h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gradient-to-b from-soft-sand/10 to-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-cormorant text-5xl md:text-6xl text-deep-calm mb-16 text-center tracking-tight"
            >
              Continue Reading
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group block"
                  >
                    {related.featured_image_url && (
                      <div className="aspect-[4/3] mb-5 overflow-hidden rounded-2xl bg-soft-sand/20 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <img
                          src={related.featured_image_url}
                          alt={`${related.title} - The Elevate Collective wellbeing blog`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h3 className="font-cormorant text-2xl md:text-3xl text-deep-calm leading-tight group-hover:text-sage-green transition-colors duration-300">
                      {related.title}
                    </h3>
                    {related.published_at && (
                      <p className="text-sm text-charcoal/50 mt-3 uppercase tracking-wide">
                        {new Date(related.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
