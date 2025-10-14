-- Create blog_comments table
create table public.blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.blog_posts(id) on delete cascade,
  name text not null,
  comment text not null,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table public.blog_comments enable row level security;

-- Allow anyone to view comments
create policy "Anyone can view comments"
on public.blog_comments
for select
using (true);

-- Allow anyone to post comments
create policy "Anyone can insert comments"
on public.blog_comments
for insert
with check (true);
