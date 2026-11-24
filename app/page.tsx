import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        Hello, I'm Romel Lamorin!
      </h1>

      <h2 className="text-2xl text-blue-800 font-semibold mb-4">
        BSIT Student | Aspiring Web Developer
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Welcome to my personal website. I am a
        Bachelor of Science in Information Technology
        student at Mater Dei College. I enjoy learning
        programming, developing websites, and exploring
        new technologies.
      </p>

      <Link
        href="/projects"
        className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
      >
        See My Projects →
      </Link>
    </main>
  );
}
