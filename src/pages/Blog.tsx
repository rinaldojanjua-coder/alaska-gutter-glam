import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Winter Gutter Preparation: Essential Steps for Alaska Homeowners",
      excerpt: "Learn how to properly prepare your gutters for Alaska's harsh winter conditions. Our comprehensive guide covers everything from cleaning to winterization techniques.",
      category: "Winter Maintenance",
      date: "December 15, 2024",
      readTime: "8 min read",
      author: "AK Gutter Gals Team",
      slug: "winter-gutter-preparation-alaska",
      featured: true
    },
    {
      title: "Understanding Ice Dams: Prevention and Solutions for Alaska Homes",
      excerpt: "Ice dams can cause serious damage to your roof and gutters. Discover what causes them and how to prevent them in Alaska's climate.",
      category: "Winter Issues",
      date: "December 12, 2024",
      readTime: "6 min read",
      author: "AK Gutter Gals Team",
      slug: "ice-dams-prevention-alaska"
    },
    {
      title: "The Complete Guide to Moss Prevention on Alaska Roofs",
      excerpt: "Alaska's moist climate creates perfect conditions for moss growth. Learn effective strategies to keep your roof moss-free year-round.",
      category: "Roof Care",
      date: "December 8, 2024",
      readTime: "10 min read",
      author: "AK Gutter Gals Team",
      slug: "moss-prevention-alaska-roofs"
    },
    {
      title: "How Often Should You Clean Your Gutters in Alaska?",
      excerpt: "Alaska's unique climate requires a specific gutter maintenance schedule. Find out how often you should clean your gutters for optimal protection.",
      category: "Maintenance Tips",
      date: "December 5, 2024",
      readTime: "5 min read",
      author: "AK Gutter Gals Team",
      slug: "gutter-cleaning-frequency-alaska"
    },
    {
      title: "Choosing the Right Gutter Guards for Extreme Weather",
      excerpt: "Not all gutter guards can handle Alaska's extreme weather. Learn what features to look for and which materials work best in our climate.",
      category: "Product Guide",
      date: "December 1, 2024",
      readTime: "7 min read",
      author: "AK Gutter Gals Team",
      slug: "choosing-gutter-guards-alaska"
    },
    {
      title: "Spring Gutter Cleaning: Post-Winter Recovery for Your Home",
      excerpt: "After Alaska's long winter, your gutters need special attention. Our spring cleaning checklist will help restore your gutter system.",
      category: "Spring Maintenance",
      date: "November 28, 2024",
      readTime: "9 min read",
      author: "AK Gutter Gals Team",
      slug: "spring-gutter-cleaning-alaska"
    },
    {
      title: "Signs Your Gutters Need Professional Attention",
      excerpt: "Learn to recognize the warning signs that indicate your gutters need professional cleaning or repair before problems become expensive.",
      category: "Problem Identification",
      date: "November 25, 2024",
      readTime: "6 min read",
      author: "AK Gutter Gals Team",
      slug: "gutter-warning-signs"
    },
    {
      title: "Alaska Home Exterior Maintenance: A Seasonal Guide",
      excerpt: "Comprehensive seasonal maintenance guide for Alaska homeowners, covering gutters, roofs, and exterior care throughout the year.",
      category: "Seasonal Guide",
      date: "November 22, 2024",
      readTime: "12 min read",
      author: "AK Gutter Gals Team",
      slug: "alaska-home-exterior-maintenance-guide"
    }
  ];

  const categories = [
    "All Posts",
    "Winter Maintenance",
    "Roof Care", 
    "Maintenance Tips",
    "Product Guide",
    "Spring Maintenance",
    "Problem Identification",
    "Seasonal Guide"
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30">
              Expert Insights
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Gutter & Roof Care Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Expert tips, guides, and insights for maintaining your Alaska home's exterior. 
              Learn from our experienced team about gutter care, roof maintenance, and weatherproofing.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="w-full py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All Posts" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Post */}
            {blogPosts[0] && (
              <Card className="mb-16 overflow-hidden border-0 shadow-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-accent flex items-center justify-center">
                    <div className="text-6xl text-primary">📝</div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="bg-primary/10 text-primary border-primary/20 w-fit mb-4">
                      Featured Article
                    </Badge>
                    <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${blogPosts[0].slug}`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={post.slug} className={`group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm slide-up stagger-${index % 3 + 1}`}>
                  {/* Post Image */}
                  <div className="aspect-video bg-gradient-accent flex items-center justify-center">
                    <div className="text-4xl text-primary">📖</div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-16 p-8 bg-gradient-subtle border-0 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Our Latest Tips
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get expert gutter and roof care tips delivered to your inbox. Learn about seasonal maintenance, 
                problem prevention, and Alaska-specific home care advice.
              </p>
              
              {/* GHL NEWSLETTER FORM INTEGRATION POINT */}
              <div className="max-w-md mx-auto p-6 border-2 border-dashed border-muted rounded-lg text-muted-foreground">
                <p className="text-sm italic">
                  [GHL NEWSLETTER FORM: Replace this section with your GoHighLevel newsletter signup form]
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;