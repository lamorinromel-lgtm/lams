export const metadata = {
  title: "Projects | Romel Lamorin",
};

const projects = [
  {
    id: 2,
    name: "LGU Inabanga Website",
    description:
      "A website providing information about municipal services and offices.",
  },
  {
    id: 3,
    name: "Barangay Information System",
    description:
      "A system for organizing barangay information and community records.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        My Projects
      </h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
