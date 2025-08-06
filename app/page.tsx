
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-['Pacifico'] text-2xl text-orange-500">Aiden Brewer</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">About</a>
              <a href="#skills" className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">Skills</a>
              <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">Testimonials</a>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">Get In Touch</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20young%20entrepreneur%20working%20at%20a%20sleek%20desk%20with%20multiple%20monitors%20showing%20marketing%20analytics%20and%20stock%20market%20data%2C%20professional%20office%20environment%20with%20natural%20lighting%2C%20contemporary%20workspace%20design%2C%20minimalist%20aesthetic%20with%20orange%20and%20green%20accent%20colors%2C%20high-tech%20atmosphere%2C%20inspiring%20business%20setting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-orange-400">Aiden Brewer</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl mb-6 text-gray-200">
                15-Year-Old Multi-Millionaire & Entrepreneur
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                I built my fortune through strategic stock market investments and founded Mango Marketing to help businesses grow. When I'm not analyzing market trends, you'll find me perfecting my matcha game! ☕️
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer text-center whitespace-nowrap">
                  Work With Me
                </a>
                <a href="#portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer text-center whitespace-nowrap">
                  See My Work
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%2015-year-old%20entrepreneur%20Aiden%20Brewer%20in%20modern%20business%20setting%2C%20wearing%20casual%20business%20attire%2C%20bright%20natural%20lighting%2C%20inspirational%20pose%20with%20subtle%20office%20background%2C%20high-quality%20portrait%20photography%20showing%20success%20and%20ambition&width=500&height=600&seq=hero-portrait-001&orientation=portrait"
                alt="Aiden Brewer - Young Entrepreneur"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My World</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At 15, I've already built a multi-million dollar portfolio through smart investments and created a successful marketing agency. I'm passionate about sharing my knowledge and helping others achieve financial success while sipping on the perfect matcha latte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-stock-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Stock Market Expert</h3>
              <p className="text-gray-600">Self-made millionaire through strategic investments and market analysis</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Agency Founder</h3>
              <p className="text-gray-600">Built Mango Marketing to deliver innovative solutions for modern businesses</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-cup-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Matcha Enthusiast</h3>
              <p className="text-gray-600">Every breakthrough idea starts with the perfect cup of matcha ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Behind the Scenes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into my daily life as a young entrepreneur
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20working%20at%20his%20computer%20setup%20with%20multiple%20trading%20screens%2C%20focused%20expression%2C%20modern%20home%20office%20environment%2C%20natural%20lighting%2C%20professional%20workspace%20with%20orange%20accent%20colors&width=300&height=400&seq=gallery-001&orientation=portrait"
                alt="Aiden working on investments"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Analyzing market trends</p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=15-year-old%20entrepreneur%20Aiden%20in%20a%20professional%20business%20meeting%20or%20presentation%20setting%2C%20confident%20posture%2C%20modern%20office%20conference%20room%2C%20natural%20lighting%2C%20business%20casual%20attire&width=300&height=400&seq=gallery-002&orientation=portrait"
                alt="Aiden in business meeting"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Client strategy session</p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20enjoying%20a%20matcha%20latte%20in%20a%20modern%20coffee%20shop%20or%20office%20setting%2C%20relaxed%20but%20professional%20atmosphere%2C%20natural%20lighting%2C%20showing%20his%20matcha%20enthusiasm%20with%20a%20smile&width=300&height=400&seq=gallery-003&orientation=portrait"
                alt="Aiden with matcha"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Matcha break inspiration</p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20photo%20of%20young%20entrepreneur%20Aiden%20celebrating%20a%20business%20success%2C%20confident%20and%20happy%20expression%2C%20modern%20office%20or%20achievement%20setting%2C%20natural%20lighting%2C%20showing%20success%20and%20accomplishment&width=300&height=400&seq=gallery-004&orientation=portrait"
                alt="Aiden celebrating success"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Another successful deal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  [Placeholder for personal story] - While most teenagers are focused on school and social media, I discovered my passion for entrepreneurship and investing early. By age 13, I was already making my first profitable trades and learning the fundamentals of wealth building.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  [Placeholder for business journey] - After achieving financial success through strategic stock market investments, I founded Mango Marketing to share my knowledge of growth strategies with businesses. My agency combines data-driven marketing with the same analytical mindset that made me successful in trading.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  [Placeholder for personality] - When I'm not studying market patterns or developing marketing campaigns, you'll find me experimenting with different matcha blends. I believe the best ideas come when you're properly caffeinated! 🍃
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-orange-500 mb-2">$X Million</h4>
                  <p className="text-gray-600">Personal Net Worth</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-orange-500 mb-2">XX+</h4>
                  <p className="text-gray-600">Clients Helped</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20young%20entrepreneur%20at%20age%2015%2C%20sitting%20in%20a%20modern%20office%20environment%2C%20wearing%20business%20casual%20attire%2C%20natural%20lighting%2C%20clean%20background%20with%20subtle%20marketing%20and%20financial%20elements%2C%20inspiring%20and%20approachable%20expression%2C%20high-quality%20portrait%20photography%20style&width=600&height=800&seq=about-portrait-001&orientation=portrait"
                alt="Aiden Brewer - Young Entrepreneur"
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-lg font-semibold">Matcha Expert ☕️</p>
              </div>
            </div>
          </div>
          
          {/* Additional About Images */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20working%20late%20at%20his%20desk%20with%20financial%20charts%20and%20marketing%20materials%20spread%20around%2C%20focused%20and%20determined%20expression%2C%20warm%20office%20lighting%2C%20professional%20workspace%20showing%20dedication%20and%20hard%20work&width=500&height=350&seq=about-work-001&orientation=landscape"
                alt="Aiden working late"
                className="w-full h-64 object-cover object-top rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-800">Late night strategy sessions</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20photo%20of%20young%20entrepreneur%20Aiden%20with%20his%20team%20at%20Mango%20Marketing%20agency%2C%20collaborative%20team%20environment%2C%20modern%20office%20setting%2C%20natural%20lighting%2C%20showing%20leadership%20and%20teamwork&width=500&height=350&seq=about-team-001&orientation=landscape"
                alt="Aiden with his team"
                className="w-full h-64 object-cover object-top rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-800">Leading the Mango Marketing team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">My Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Wall Street to main street - here's what I bring to every project
            </p>
          </div>

          {/* Skills Photo Banner */}
          <div className="relative mb-16">
            <img 
              src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20demonstrating%20his%20skills%20in%20a%20professional%20montage%20style%2C%20showing%20him%20analyzing%20charts%2C%20presenting%20to%20clients%2C%20working%20on%20marketing%20campaigns%2C%20modern%20office%20environment%20with%20multiple%20workspaces%2C%20dynamic%20and%20inspiring%20composition&width=1200&height=400&seq=skills-banner-001&orientation=landscape"
              alt="Aiden's skills in action"
              className="w-full h-64 object-cover object-top rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-2xl flex items-center">
              <div className="text-white p-12">
                <h3 className="text-3xl font-bold mb-2">Skills in Action</h3>
                <p className="text-xl">Where expertise meets execution</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Stock Market Trading</h3>
              <p className="text-gray-600 mb-4">[Placeholder for skill description] - Advanced technical analysis, portfolio optimization, and risk management strategies</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-megaphone-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">[Placeholder for skill description] - Full-service marketing through my agency Mango Marketing</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Strategy</h3>
              <p className="text-gray-600 mb-4">[Placeholder for skill description] - Growth planning, market analysis, and strategic business development</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-funds-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Wealth Building</h3>
              <p className="text-gray-600 mb-4">[Placeholder for skill description] - Investment strategies that built my multi-million dollar portfolio</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-presentation-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Brand Building</h3>
              <p className="text-gray-600 mb-4">[Placeholder for skill description] - Personal branding and business identity development</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-cup-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Matcha Mastery</h3>
              <p className="text-gray-600 mb-4">[Placeholder for fun skill] - The secret fuel behind all my successful ventures</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">My Work & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of successful investments, marketing campaigns, and business ventures
            </p>
          </div>

          {/* Portfolio Hero Image */}
          <div className="relative mb-16">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20workspace%20setup%20showing%20young%20entrepreneur%20Aidens%20multiple%20successful%20projects%2C%20including%20stock%20market%20trading%20screens%2C%20marketing%20campaign%20materials%2C%20and%20business%20achievements%2C%20modern%20office%20environment%20with%20orange%20and%20professional%20color%20scheme&width=1200&height=400&seq=portfolio-hero-001&orientation=landscape"
              alt="Aiden's portfolio overview"
              className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end">
              <div className="text-white p-12">
                <h3 className="text-4xl font-bold mb-4">Building Success Stories</h3>
                <p className="text-xl">Every project is a step toward greater achievements</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Stock%20market%20investment%20portfolio%20showing%20significant%20growth%20and%20returns%2C%20financial%20charts%20with%20upward%20trending%20lines%2C%20professional%20trading%20interface%2C%20clean%20modern%20design%20with%20green%20profit%20indicators%20and%20financial%20data%20visualization&width=400&height=300&seq=portfolio-001&orientation=landscape"
                alt="Investment Portfolio"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Investment Portfolio</h3>
                <p className="text-gray-600 mb-4">[Placeholder for portfolio description] - Built multi-million dollar wealth through strategic tech and growth stock investments</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Stock Trading</span>
                  <i className="ri-arrow-right-line text-orange-500 cursor-pointer"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20marketing%20agency%20office%20with%20Mango%20Marketing%20branding%2C%20professional%20workspace%20with%20creative%20team%20collaboration%2C%20orange%20and%20vibrant%20color%20scheme%2C%20contemporary%20design%20with%20marketing%20materials%20and%20campaign%20displays&width=400&height=300&seq=portfolio-002&orientation=landscape"
                alt="Mango Marketing Agency"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mango Marketing Agency</h3>
                <p className="text-gray-600 mb-4">[Placeholder for agency description] - Founded and scaled my marketing agency serving growing businesses worldwide</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Business Venture</span>
                  <i className="ri-arrow-right-line text-orange-500 cursor-pointer"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Successful%20social%20media%20marketing%20campaign%20dashboard%20showing%20impressive%20growth%20metrics%20and%20engagement%20rates%2C%20modern%20interface%20design%20with%20colorful%20charts%20and%20graphs%2C%20professional%20digital%20marketing%20results%2C%20clean%20minimalist%20background%20with%20orange%20accent%20colors&width=400&height=300&seq=portfolio-003&orientation=landscape"
                alt="Marketing Campaign Results"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Client Success Stories</h3>
                <p className="text-gray-600 mb-4">[Placeholder for campaign description] - Helped clients achieve 300%+ ROI through strategic marketing campaigns</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Marketing Results</span>
                  <i className="ri-arrow-right-line text-orange-500 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Success Moments Gallery */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Success Moments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20celebrating%20a%20major%20investment%20milestone%2C%20professional%20photo%20showing%20success%20and%20achievement%2C%20modern%20office%20setting%2C%20confident%20and%20happy%20expression%2C%20natural%20lighting&width=400&height=500&seq=success-001&orientation=portrait"
                  alt="Investment milestone celebration"
                  className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                  <p className="text-white p-4 font-semibold">First million milestone</p>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20photo%20of%20young%20entrepreneur%20Aiden%20receiving%20an%20award%20or%20recognition%2C%20formal%20business%20setting%2C%20proud%20moment%2C%20professional%20attire%2C%20achievement%20and%20success%20theme&width=400&height=500&seq=success-002&orientation=portrait"
                  alt="Business award ceremony"
                  className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                  <p className="text-white p-4 font-semibold">Young Entrepreneur Award</p>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20entrepreneur%20Aiden%20speaking%20at%20a%20business%20conference%20or%20event%2C%20professional%20presentation%20setting%2C%20confident%20speaker%20on%20stage%2C%20inspiring%20and%20motivational%20atmosphere%2C%20professional%20photography&width=400&height=500&seq=success-003&orientation=portrait"
                  alt="Speaking at conference"
                  className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end">
                  <p className="text-white p-4 font-semibold">Keynote speaker at 15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from clients and colleagues about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20satisfied%20business%20client%2C%20middle-aged%20entrepreneur%20smiling%20confidently%2C%20clean%20corporate%20background%2C%20professional%20photography%20style%20with%20natural%20lighting%2C%20trustworthy%20and%20approachable%20expression&width=100&height=100&seq=testimonial-001&orientation=squarish"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">[Client Name Placeholder]</h4>
                  <p className="text-gray-600 text-sm">[Company Name], CEO</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "[Placeholder testimonial] - Working with Aiden through Mango Marketing transformed our business. His youthful energy combined with incredible business wisdom delivered results beyond our expectations!"
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20happy%20female%20business%20owner%2C%20confident%20entrepreneur%20in%20her%2030s%2C%20modern%20office%20background%2C%20professional%20photography%20with%20warm%20lighting%2C%20positive%20and%20successful%20expression&width=100&height=100&seq=testimonial-002&orientation=squarish"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">[Client Name Placeholder]</h4>
                  <p className="text-gray-600 text-sm">[Company Name], Founder</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "[Placeholder testimonial] - Aiden's investment insights and marketing expertise are incredible. At just 15, he has more business acumen than most adults I know!"
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20satisfied%20male%20business%20executive%2C%20experienced%20entrepreneur%20in%20business%20attire%2C%20corporate%20environment%20background%2C%20professional%20portrait%20photography%20with%20confident%20and%20pleased%20expression&width=100&height=100&seq=testimonial-003&orientation=squarish"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">[Client Name Placeholder]</h4>
                  <p className="text-gray-600 text-sm">[Company Name], CMO</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "[Placeholder testimonial] - Aiden's strategic thinking and matcha-fueled creativity helped us scale from startup to 7 figures. Age truly is just a number!"
              </p>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you need marketing help through Mango Marketing, investment advice, or just want to chat about entrepreneurship over a matcha, I'd love to hear from you!
              </p>
              
              {/* Contact Photo */}
              <div className="mb-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20entrepreneur%20Aiden%20in%20a%20welcoming%20pose%2C%20friendly%20and%20approachable%20expression%2C%20modern%20office%20or%20coffee%20shop%20setting%2C%20natural%20lighting%2C%20ready%20to%20connect%20with%20clients%20and%20partners&width=400&height=300&seq=contact-photo-001&orientation=landscape"
                  alt="Contact Aiden"
                  className="w-full h-48 object-cover object-top rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">[Email Placeholder]</h4>
                    <p className="text-gray-600">aiden@aidenbrewer.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">[Phone Placeholder]</h4>
                    <p className="text-gray-600">+1 (XXX) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">[Location Placeholder]</h4>
                    <p className="text-gray-600">Available worldwide (powered by matcha)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow My Journey</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-gray-600 hover:text-orange-600 text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-gray-600 hover:text-orange-600 text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-gray-600 hover:text-orange-600 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6" id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">What can I help you with?</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none pr-8 text-sm"
                    >
                      <option>Marketing Strategy (Mango Marketing)</option>
                      <option>Investment Consulting</option>
                      <option>Business Mentoring</option>
                      <option>Speaking Opportunity</option>
                      <option>Partnership Inquiry</option>
                      <option>Matcha Recipe Exchange</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-3 text-gray-400 text-xl"></i>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell me about your project or goals..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-['Pacifico'] text-2xl text-orange-400 mb-4">Aiden Brewer</div>
              <p className="text-gray-400 leading-relaxed">
                15-year-old entrepreneur, investor, and founder of Mango Marketing. Building wealth and helping businesses grow, one matcha at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer block">About</a>
                <a href="#skills" className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer block">Skills</a>
                <a href="#portfolio" className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer block">Portfolio</a>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer block">Testimonials</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Let's Work Together</h4>
              <p className="text-gray-400 mb-4">Ready to grow your business or portfolio?</p>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap inline-block">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Aiden Brewer. Young entrepreneur proving that age is just a number in business success. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
