import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Insurance Coverage in 2024",
      excerpt: "A comprehensive guide to navigating insurance policies and ensuring you have adequate protection for your needs.",
      content: "Insurance can be complex, but understanding your coverage is crucial for financial security...",
      author: "Sarah Johnson",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Insurance Tips",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Top 5 Factors That Affect Your Insurance Premiums",
      excerpt: "Learn about the key factors insurance companies consider when calculating your premiums and how to potentially lower costs.",
      content: "Insurance premiums are determined by various risk factors that insurers carefully evaluate...",
      author: "Michael Chen",
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Cost Savings",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Business Insurance: Protecting Your Company's Future",
      excerpt: "Essential business insurance types every entrepreneur should consider to safeguard their investment.",
      content: "Running a business involves numerous risks, and having the right insurance coverage is essential...",
      author: "Emily Rodriguez",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Business",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Health Insurance vs. Life Insurance: What's the Difference?",
      excerpt: "A detailed comparison of health and life insurance to help you make informed decisions about your coverage.",
      content: "Many people confuse health insurance with life insurance, but they serve very different purposes...",
      author: "Dr. Amanda Foster",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Health & Life",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "How to File an Insurance Claim: A Step-by-Step Guide",
      excerpt: "Navigate the claims process with confidence using our comprehensive guide to filing insurance claims.",
      content: "Filing an insurance claim can be stressful, especially during difficult times...",
      author: "Robert Kim",
      date: "2024-02-20",
      readTime: "8 min read",
      category: "Claims Process",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "The Future of Insurance: Technology and Innovation",
      excerpt: "Explore how technology is revolutionizing the insurance industry and what it means for consumers.",
      content: "The insurance industry is undergoing a digital transformation that's changing how we think about coverage...",
      author: "Jessica Park",
      date: "2024-02-15",
      readTime: "6 min read",
      category: "Technology",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Insurance Tips", "Cost Savings", "Business", "Health & Life", "Claims Process", "Technology"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Insights</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your search criteria.</p>
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
                <li><a href="/personal-insurance" className="hover:text-primary-foreground/80 transition-colors">Personal Insurance</a></li>
                <li><a href="/business-insurance" className="hover:text-primary-foreground/80 transition-colors">Business Insurance</a></li>
                <li><a href="/employee-insurance" className="hover:text-primary-foreground/80 transition-colors">Employee Insurance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="hover:text-primary-foreground/80 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@insurance.com</p>
              <p>Address: 123 Insurance St, City, State 12345</p>
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
            <p>&copy; 2024 Insurance Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;