import Header from '../components/Header';
import Footer from '../components/Footer';

function Team() {
  const sportsStats = {
    title: 'adVITya Sports',
    data: [
      { label: 'Sports Events (Boys + Girls)', value: '9' },
      { label: 'Total Participants', value: '957' },
      { label: 'External Participants', value: '573' },
      { label: 'Internal Participants', value: '584' },
      { label: 'States Participated', value: '15' },
      { label: 'Universities Participated', value: '72' },
    ],
  };

  const technoCulturalStats = {
    title: 'adVITya Techno-Cultural',
    data: [
      { label: 'Participants', value: '5000+' },
      { label: 'External Participants', value: '534' },
      { label: 'States Participated', value: '15' },
      { label: 'Institutes Participated', value: '86' },
      { label: 'Countries Participated', value: '3' },
    ],
  };

  const sportsEvent = {
    title: 'adVITya Sports',
    duration: '4 days + 1 Reserve Day',
    dates: '21st - 24th Feb, 2026',
  };

  const technoCulturalEvent = {
    title: 'adVITya Techno-Cultural',
    duration: '3 days',
    dates: '26th - 28th Feb, 2026',
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0F041C] flex flex-col">
      <Header />

      {/* FULL PAGE BACKGROUND */}
      <img
        src="/Herosection_BG.svg"
        alt="Background"
        className="hidden sm:block fixed inset-0 w-full h-screen object-cover opacity-30 pointer-events-none z-0"
      />

      <main className="flex-1 w-full pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* About AdVITya Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About adVITya
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
              adVITya, the annual Techno-Cultural & Sports Fest of VIT Bhopal University, epitomises the institution's commitment to a dynamic learning environment, fostering innovation, creativity, and technical prowess. Providing a physical platform for students to showcase their talents, engage in competitions, and immerse themselves in diverse cultural experiences. adVITya plays a crucial role in holistic student development.
            </p>
          </div>

          {/* AdVITya 2026 Events Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              adVITya '26
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sports Event */}
              <div className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{sportsEvent.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 font-semibold">{sportsEvent.duration}</p>
                  <p className="text-purple-400 font-semibold">{sportsEvent.dates}</p>
                </div>
              </div>

              {/* Techno-Cultural Event */}
              <div className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{technoCulturalEvent.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 font-semibold">{technoCulturalEvent.duration}</p>
                  <p className="text-purple-400 font-semibold">{technoCulturalEvent.dates}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats About AdVITya Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Stats About adVITya 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Sports Stats */}
              <div className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-purple-700/30 pb-4">
                  {sportsStats.title}
                </h3>
                <ul className="space-y-3">
                  {sportsStats.data.map((stat, idx) => (
                    <li key={idx} className="flex justify-between items-start text-gray-300">
                      <span className="font-semibold">• {stat.label}</span>
                      <span className="text-purple-400 font-bold">{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Techno-Cultural Stats */}
              <div className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-purple-700/30 pb-4">
                  {technoCulturalStats.title}
                </h3>
                <ul className="space-y-3">
                  {technoCulturalStats.data.map((stat, idx) => (
                    <li key={idx} className="flex justify-between items-start text-gray-300">
                      <span className="font-semibold">• {stat.label}</span>
                      <span className="text-purple-400 font-bold">{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Team;
