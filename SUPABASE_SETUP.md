# Supabase Blog Setup Guide

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Enter project details:
   - Name: `elevate-blog`
   - Database Password: (save this password!)
   - Region: Choose closest to your location
4. Wait for project to be created (~2 minutes)

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (something like `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 3: Create Environment File

1. In your project root, create a file named `.env`
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 4: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the SQL from `supabase-schema.sql`
4. Click "Run" to execute

## Step 5: Set Up Storage for Images

1. Go to **Storage** in Supabase dashboard
2. Create a new bucket named `blog-images`
3. Set it to **Public** (so images can be accessed)
4. In bucket settings → Policies, add a policy:
   - Policy name: "Public Access"
   - Allowed operation: SELECT
   - Target roles: public
   - Policy definition: `true`

## Step 6: Create Your First Admin User

1. Go to **Authentication** → **Users**
2. Click "Add user"
3. Add your email and password
4. This will be your admin login

## Done!

Your blog is now ready to use. Restart your dev server to load the new environment variables:

```bash
npm run dev
```

Then navigate to `/admin` to start creating blog posts!
