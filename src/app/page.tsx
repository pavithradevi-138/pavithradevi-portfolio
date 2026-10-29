
import { getLatestPosts } from "@/lib/wordpress";

export const instant = false;

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="font-semibold uppercase tracking-widest text-pink-300">
          WordPress Developer · Frontend Developer
        </p>

        <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
          Pavithra Devi C.
        </h1>

        <p className="mt-5 text-lg text-slate-300">
          Building thoughtful digital experiences with WordPress,
          React, and modern frontend technologies.
        </p>

        <section className="mt-12 rounded-2xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">
            Latest from WordPress
          </h2>

          {posts.length === 0 ? (
            <p className="mt-4 text-slate-300">
              No published posts yet. Publish a post in WordPress
              to see it here.
            </p>
          ) : (
            <ul className="mt-6 space-y-6">
              {posts.map((post) => (
                <li key={post.id}>
                  <h3 className="text-xl font-medium text-pink-200">
                    {post.title.rendered.replace(/<[^>]*>/g, "")}
                  </h3>

                  <p className="mt-2 text-slate-300">
                    {post.excerpt.rendered.replace(/<[^>]*>/g, "")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  );
}
