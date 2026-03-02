import { cvData } from '../data/cv';
import { Download } from 'lucide-react';
import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadCV = () => {
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UKOBUKEYE_Mordekai_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {cvData.name}
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            {cvData.profile}
          </p>
          <button
            onClick={downloadCV}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <Download size={20} />
            Download CV (TXT)
          </button>
        </div>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-700 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-medium mb-2">Frontend</h3>
              <p className="text-slate-300">{cvData.skills.frontend}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-medium mb-2">Backend</h3>
              <p className="text-slate-300">{cvData.skills.backend}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-medium mb-2">Database</h3>
              <p className="text-slate-300">{cvData.skills.database}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-medium mb-2">Other Technologies</h3>
              <p className="text-slate-300">{cvData.skills.other}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 md:col-span-2">
              <h3 className="text-cyan-400 font-medium mb-2">Tools</h3>
              <p className="text-slate-300">{cvData.skills.tools}</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-700 pb-2">Education</h2>
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
            <p className="text-slate-300">{cvData.education}</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-700 pb-2">Projects</h2>
          <div className="space-y-4">
            {cvData.projects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-300">{project}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-700 pb-2">Languages</h2>
          <div className="flex flex-wrap gap-4">
            {cvData.languages.map((lang, index) => (
              <div key={index} className="bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                <p className="text-slate-300">{lang}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-700 pb-2">References</h2>
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
            <p className="text-slate-300 italic">{cvData.references}</p>
          </div>
        </section>
      </div>
    </div>
  );
}