-- Add user_id column to track post ownership
ALTER TABLE public.blog_posts 
ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Set user_id to NOT NULL after we've added it (for future posts)
-- Note: Existing posts will have NULL user_id, but new posts must have it
ALTER TABLE public.blog_posts 
ALTER COLUMN user_id SET DEFAULT auth.uid();

-- Drop the old insecure policies
DROP POLICY IF EXISTS "Authenticated users can create blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON public.blog_posts;

-- Create secure policies that check ownership
CREATE POLICY "Users can create their own blog posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own blog posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own blog posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);