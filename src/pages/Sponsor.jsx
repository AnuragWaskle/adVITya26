import Header from '../components/Header';

function Sponsor() {
  // Static sponsorship data
  const sponsorData = [
    {
      id: 1,
      package_name: 'Title Sponsors',
      benefits: {
        space_for_stalls: true,
        banners_posters: true,
        logo_placement: true,
        event_brochure: true,
        product_launch: true,
        press_coverage: true,
        crowd_interaction: true,
        post_event_coverage: true,
        promotional_ad: true,
        host_preshow: true,
        host_celebrity_night: true,
        tickets_celebrity_night: true,
      },
    },
    {
      id: 2,
      package_name: 'Platinum',
      benefits: {
        space_for_stalls: true,
        banners_posters: true,
        logo_placement: true,
        event_brochure: true,
        product_launch: true,
        press_coverage: true,
        crowd_interaction: true,
        post_event_coverage: true,
        promotional_ad: false,
        host_preshow: true,
        host_celebrity_night: true,
        tickets_celebrity_night: true,
      },
    },
    {
      id: 3,
      package_name: 'Gold',
      benefits: {
        space_for_stalls: true,
        banners_posters: true,
        logo_placement: true,
        event_brochure: true,
        product_launch: false,
        press_coverage: true,
        crowd_interaction: true,
        post_event_coverage: true,
        promotional_ad: true,
        host_preshow: false,
        host_celebrity_night: false,
        tickets_celebrity_night: false,
      },
    },
    {
      id: 4,
      package_name: 'Silver',
      benefits: {
        space_for_stalls: true,
        banners_posters: true,
        logo_placement: true,
        event_brochure: true,
        product_launch: false,
        press_coverage: true,
        crowd_interaction: false,
        post_event_coverage: false,
        promotional_ad: true,
        host_preshow: false,
        host_celebrity_night: false,
        tickets_celebrity_night: false,
      },
    },
    {
      id: 5,
      package_name: 'Custom',
      benefits: {
        space_for_stalls: false,
        banners_posters: false,
        logo_placement: true,
        event_brochure: false,
        product_launch: false,
        press_coverage: false,
        crowd_interaction: false,
        post_event_coverage: false,
        promotional_ad: false,
        host_preshow: false,
        host_celebrity_night: false,
        tickets_celebrity_night: false,
      },
    },
  ];

  const benefitKeys = [
    { key: 'space_for_stalls', label: 'Space for stalls' },
    { key: 'banners_posters', label: 'Banners/Posters' },
    { key: 'logo_placement', label: 'Logo Placement' },
    { key: 'event_brochure', label: 'Event Brochure' },
    { key: 'product_launch', label: 'Product launch' },
    { key: 'press_coverage', label: 'Press Coverage' },
    { key: 'crowd_interaction', label: 'Crowd Interaction' },
    { key: 'post_event_coverage', label: 'Post Event Coverage' },
    { key: 'promotional_ad', label: 'Promotional Ad' },
    { key: 'host_preshow', label: 'Host Preshow' },
    { key: 'host_celebrity_night', label: 'Host Celebrity Night' },
    { key: 'tickets_celebrity_night', label: 'Tickets in Celebrity Night' },
  ];

  const whySponsorUsPoints = [
    { number: '01', title: 'Massive Audience Reach' },
    { number: '02', title: 'Diverse Event Categories' },
    { number: '03', title: 'Networking Opportunities' },
    { number: '04', title: 'Targeted Demographics' },
    { number: '05', title: 'High-Impact Brand Placement' },
    { number: '06', title: 'Customizable Packages' },
    { number: '07', title: 'Support for Positive Impact' },
    { number: '08', title: 'Exclusive Access' },
  ];

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
          {/* Hero Section */}
          <div className="mb-16 md:mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
              SPONSOR US
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Dive into the heart of VIT Bhopal with AdVITya'26 – an electrifying blend of technology and culture. Crafted by the ingenious minds of VIT Bhopal students.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
  href="mailto:advitya.convenor@vitbhopal.ac.in?cc=events@vitbhopal.ac.in"
>
  <button className="px-8 py-3 bg-[#3D1749] hover:bg-[#4D1F59] text-white font-semibold rounded-lg transition duration-300">
    CONTACT US
  </button>
</a>

              <a
  href="https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fa8b0002393a9c135/view?project=695eb843003ae5a0552b&mode=admin"         
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-8 py-3 bg-[#C4A8D8] hover:bg-[#D4B8E8] text-gray-900 font-semibold rounded-lg transition duration-300 flex items-center gap-2">
    <span>↓</span> BROCHURE
  </button>
</a>

            </div>
          </div>

          {/* Why Sponsor Us Section */}
          <div className="mb-20 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              WHY SPONSOR US
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
              AdVITya, VIT Bhopal's annual techno-cultural and sports fest, is more than just an event it's a platform for innovation, creativity, and collaboration. Here's why your sponsorship can make a measurable impact:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {whySponsorUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-6 hover:border-purple-500/50 transition duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-white">{point.number}</span>
                    <span className="text-lg md:text-xl text-gray-300 font-medium">{point.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Packages Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Sponsorship Packages
            </h2>
            <div className="overflow-x-auto rounded-lg border border-purple-700/30">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2A1138] border-b border-purple-700/30">
                    <th className="text-left px-4 md:px-6 py-4 text-white font-semibold text-sm md:text-base whitespace-nowrap">
                      Sponsorship Benefits
                    </th>
                    {sponsorData.map((pkg) => (
                      <th
                        key={pkg.id}
                        className="px-4 md:px-6 py-4 text-white font-semibold text-center text-sm md:text-base whitespace-nowrap"
                      >
                        {pkg.package_name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benefitKeys.map((benefit, idx) => (
                    <tr
                      key={benefit.key}
                      className={`border-b border-purple-700/20 ${idx % 2 === 0 ? 'bg-[#1A0A28]/50' : 'bg-transparent'
                        } hover:bg-purple-900/30 transition`}
                    >
                      <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">
                        {benefit.label}
                      </td>
                      {sponsorData.map((pkg) => {
                        const hasAccess = pkg.benefits[benefit.key];
                        return (
                          <td
                            key={`${pkg.id}-${benefit.key}`}
                            className="px-4 md:px-6 py-4 text-center"
                          >
                            <div className="flex justify-center">
                              {hasAccess ? (
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                              ) : (
                                <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-gray-600 rounded-full"></div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex gap-6 md:gap-8 mt-8 flex-wrap justify-center text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-gray-300">Full Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-gray-600 rounded-full"></div>
                <span className="text-gray-300">Some Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-gray-500 rounded-full opacity-50"></div>
                <span className="text-gray-400">Not Available</span>
              </div>
            </div>
          </div>

          {/* Stall Layout Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              STALL LAYOUT
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Dive into the heart of VIT Bhopal with AdVITya'26 – an electrifying blend of technology and culture. Crafted by the ingenious minds of VIT Bhopal students.
            </p>
            
            {/* Stall Layout Image */}
            <div className="mb-12 flex justify-center">
              <img 
                src="https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fa764000452585543/view?project=695eb843003ae5a0552b&mode=admin" 
                alt="Stall Layout Diagram" 
                className="max-w-full h-auto rounded-lg border border-purple-700/30"
              />
            </div>

            {/* Stall Details Table */}
            <div className="overflow-x-auto rounded-lg border border-purple-700/30 mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2A1138] border-b border-purple-700/30">
                    <th className="text-left px-4 md:px-6 py-4 text-white font-semibold text-sm md:text-base">
                      S.No.
                    </th>
                    <th className="text-left px-4 md:px-6 py-4 text-white font-semibold text-sm md:text-base">
                      Particulars
                    </th>
                    <th className="text-left px-4 md:px-6 py-4 text-white font-semibold text-sm md:text-base">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-700/20 bg-[#1A0A28]/50 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">1</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Sports</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">9th Feb - 12th Feb, 2026</td>
                  </tr>
                  <tr className="border-b border-purple-700/20 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">2</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Tech/Non-Tech/Cultural</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">9th Feb - 12th Feb, 2026</td>
                  </tr>
                  <tr className="border-b border-purple-700/20 bg-[#1A0A28]/50 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">3</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Venue</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">Football Ground</td>
                  </tr>
                  <tr className="border-b border-purple-700/20 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">4</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Size of Stall</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">15x10</td>
                  </tr>
                  <tr className="border-b border-purple-700/20 bg-[#1A0A28]/50 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">5</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Charges of Banner</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">Rs. 75,000/- for all 7 Days</td>
                  </tr>
                  <tr className="border-b border-purple-700/20 hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">6</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Charges of Stall</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">1.5 Lac Minimum</td>
                  </tr>
                  <tr className="hover:bg-purple-900/30 transition">
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">7</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 font-medium text-sm md:text-base">Charges of all 7 Days</td>
                    <td className="text-left px-4 md:px-6 py-4 text-gray-300 text-sm md:text-base">2,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-[#1A0A28] border border-purple-700/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Partnership Packages Available!</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Explore tailored packages designed to enhance your support and engagement. Each partnership option comes with exclusive goodies or brand products to enrich the experience.
            </p>
            <h4 className="text-xl font-bold text-white mb-3 mt-6">Brand Publicity Note:</h4>
            <p className="text-gray-300 leading-relaxed">
              For wider brand publicity and reach please confirm your brand visibility norms by January 2025.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sponsor;
