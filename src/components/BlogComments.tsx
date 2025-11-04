import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Calendar } from "lucide-react";
import { z } from "zod";

const commentSchema = z.object({
  user_name: z.string().trim().min(1, "Name is required").max(100),
  user_email: z.string().trim().email("Invalid email").max(255),
  comment_text: z.string().trim().min(1, "Comment is required").max(1000),
});

interface Comment {
  id: string;
  user_name: string;
  user_email: string;
  comment_text: string;
  created_at: string;
}

export const BlogComments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    comment_text: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_comments")
        .select("*")
        .eq("blog_post_id", postId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = commentSchema.parse(formData);
      setSubmitting(true);

      const { error } = await supabase
        .from("blog_comments")
        .insert([{
          blog_post_id: postId,
          user_name: validatedData.user_name,
          user_email: validatedData.user_email,
          comment_text: validatedData.comment_text,
        }]);

      if (error) throw error;

      toast({
        title: "Comment posted!",
        description: "Your comment has been added successfully.",
      });

      setFormData({ user_name: "", user_email: "", comment_text: "" });
      fetchComments();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to post comment. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-3xl font-bold mb-8">Comments ({comments.length})</h2>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="text-xl font-semibold">Leave a Comment</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.user_name}
                  onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                  required
                  maxLength={255}
                />
              </div>
            </div>
            <Textarea
              placeholder="Your Comment *"
              value={formData.comment_text}
              onChange={(e) => setFormData({ ...formData, comment_text: e.target.value })}
              required
              maxLength={1000}
              rows={4}
              className="resize-none"
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Posting...
                </>
              ) : (
                "Post Comment"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{comment.user_name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={comment.created_at}>
                      {new Date(comment.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <p className="text-foreground whitespace-pre-wrap">{comment.comment_text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};
