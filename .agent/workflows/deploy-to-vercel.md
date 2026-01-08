---
description: How to deploy the Next.js application to Vercel
---

# Deploying to Vercel

Since you have already pushed your code to GitHub, deploying to Vercel is very straightforward.

1.  **Log in to Vercel:**
    *   Go to [vercel.com](https://vercel.com) and log in (preferably with your GitHub account).

2.  **Import Project:**
    *   Click on **"Add New..."** button (usually top right) and select **"Project"**.
    *   You should see a list of your GitHub repositories. Find **`JayCreations`** and click **"Import"**.

3.  **Configure Project:**
    *   **Framework Preset:** It should automatically detect **Next.js**.
    *   **Root Directory:** Leave as `./`.
    *   **Environment Variables:**
        *   If you have your Supabase credentials ready, expand "Environment Variables" and add:
            *   `NEXT_PUBLIC_SUPABASE_URL`
            *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
        *   *Note: You can skip this for now if you haven't set up Supabase yet, but backend features won't work.*

4.  **Deploy:**
    *   Click **"Deploy"**.
    *   Vercel will build your project. This usually takes 1-2 minutes.

5.  **Success:**
    *   Once done, you will get a live URL (e.g., `jay-creations.vercel.app`).
    *   Any new commits you push to the `main` branch on GitHub will automatically trigger a new deployment!
