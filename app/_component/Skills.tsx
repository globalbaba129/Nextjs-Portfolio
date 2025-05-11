import React from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", value: 90 },
      { name: "React.js", value: 90 },
      { name: "HTML5", value: 95 },
      { name: "CSS3", value: 90 },
      { name: "JavaScript", value: 92 },
      { name: "Tailwind CSS", value: 88 },
      { name: "Bootstrap", value: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", value: 88 },
      { name: "Express.js", value: 96 },
      { name: "PHP", value: 99 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", value: 95 },
      { name: "MySQL", value: 98 },
      { name: "SQL", value: 92 },
      { name: "NoSQL", value: 90 },
    ],
  },
  {
    category: "API Development",
    skills: [
      { name: "RESTful APIs", value: 90 },
      { name: "Third-Party Integrations", value: 85 },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", value: 80 },
      { name: "Dart", value: 78 },
      { name: "React Native", value: 78 },
    ],
  },
  {
    category: "Version Control & Tools",
    skills: [
      { name: "Git", value: 88 },
      { name: "Jira", value: 75 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "WordPress", value: 85 },
      { name: "Shopify", value: 85 },
      { name: "Bun.js", value: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 drop-shadow-lg">
          💡 Tech Stack & Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((group, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-sm">
                🔹 {group.category}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.value}%</span>
                    </div>
                    <div className="w-full h-5 bg-gray-300 rounded-xl shadow-inner border border-gray-200">
                      <div
                        className="h-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg progress-bar"
                        style={{
                          width: `${skill.value}%`,
                          boxShadow: "inset 0 -1px 2px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.2)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
