import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search, ArrowLeft, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import heroOffice from "@/assets/hero-office.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .order("published_at", { ascending: false });

        if (error) throw error;

        setBlogPosts(data || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Insurance Insights & Tips | Theory Insurance Agency Blog</title>
        <meta name="description" content="Stay informed with the latest insurance news, tips, and insights from our experts. Read articles about personal, business, and employee insurance coverage." />
        <meta name="keywords" content="insurance blog, insurance tips, insurance insights, personal insurance, business insurance, employee insurance, insurance news Kenya" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Insurance Insights & Tips | Theory Insurance Agency Blog" />
        <meta property="og:description" content="Stay informed with the latest insurance news, tips, and insights from our experts" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Theory Insurance Agency Blog",
            "description": "Insurance insights, tips, and industry updates",
            "publisher": {
              "@type": "Organization",
              "name": "Theory Insurance Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroOffice} 
              alt="Insurance office" 
              className="w-full h-full object-cover"
            />
<div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <Link
      to="/"
      className="inline-flex items-center text-white/80 hover:text-secondary/80 mb-6 transition-colors"
    >
      ← Back to Home
    </Link>
            </div>
            <div className="text-center animate-fade-in">
             <h1 className="text-4xl font-bold text-foreground mb-4">Blog Articles</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Stay informed with the latest insurance news, tips, and insights from our experts
              </p>
            </div>
          </div>
        </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchTerm || selectedCategory !== "All" 
                ? "No articles found matching your search criteria."
                : "No blog posts available yet. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                {post.image_url && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {!post.image_url && <div className="aspect-video bg-muted rounded-t-lg"></div>}
                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.published_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insurance insights, tips, and industry updates directly in your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary-foreground/80 transition-colors">Home</a></li>
                <li><Link to="/employee-insurance" className="block hover:text-primary">Employee Benefits</Link></li>
                <li><Link to="/personal-insurance" className="hover:text-primary">Personal</Link></li>
                <li><Link to="/business-insurance" className="block hover:text-primary">Business</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="hover:text-primary-foreground/80 transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">Phone: +254 728 813 594</p>
              <p className="mb-2">Email: info@theoryinsurance.co.ke</p>
              <p>Address: T Mall Langata, Nairobi</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">LinkedIn</a>

              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2025 Theory Insurance Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Blog;