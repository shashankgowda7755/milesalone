import React, { useState } from 'react';
import { Eye, Heart, Download, Filter, Search, Grid3X3, Square, Camera, MapPin, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos', count: 24 },
    { id: 'landscape', label: 'Landscapes', count: 8 },
    { id: 'people', label: 'People & Culture', count: 6 },
    { id: 'food', label: 'Local Food', count: 4 },
    { id: 'architecture', label: 'Architecture', count: 4 },
    { id: 'planning', label: 'Journey Planning', count: 2 }
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Kashmir Valley Dreams",
      location: "Srinagar, Kashmir",
      date: "Planned for Aug 2025",
      category: "landscape",
      votes: 89,
      views: 1250,
      story: "The apple orchards that await me in the valley. Planning to stay with local families and learn traditional farming methods.",
      settings: "iPhone 14 Pro | f/2.8 | 1/250s | ISO 100",
      height: 300
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Desert Planning Session",
      location: "Mysore, Karnataka", 
      date: "Dec 2024",
      category: "planning",
      votes: 67,
      views: 890,
      story: "Late night planning session for the Rajasthan leg of the journey. Every route tells a different story.",
      settings: "iPhone 14 Pro | f/1.8 | 1/60s | ISO 400",
      height: 250
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mountain Monastery Vision", 
      location: "Himachal Pradesh",
      date: "Planned for Sep 2025",
      category: "architecture",
      votes: 143,
      views: 1876,
      story: "Buddhist monasteries where I plan to spend time in meditation and learning about mountain community life.",
      settings: "DJI Mini 3 Pro | f/2.8 | 1/500s | ISO 100",
      height: 350
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Backwaters Anticipation",
      location: "Kerala",
      date: "Planned for Nov 2025",
      category: "landscape",
      votes: 198,
      views: 2340,
      story: "The coconut groves and backwaters where I'll learn about spice farming and traditional boat making.",
      settings: "iPhone 14 Pro | f/2.8 | 1/125s | ISO 200",
      height: 280
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Temple Architecture Study",
      location: "Tamil Nadu",
      date: "Planned for Dec 2025",
      category: "architecture", 
      votes: 156,
      views: 1567,
      story: "Ancient Dravidian temples that will mark the final leg of my journey. Each carved stone tells a story.",
      settings: "DJI Mini 3 Pro | f/2.8 | 1/400s | ISO 100",
      height: 320
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Three Oceans Meet",
      location: "Kanyakumari, Tamil Nadu",
      date: "Planned for Dec 2025",
      category: "landscape",
      votes: 234,
      views: 3456,
      story: "The southernmost tip of India where my 4-month journey will conclude. Arabian Sea, Bay of Bengal, and Indian Ocean unite.",
      settings: "iPhone 14 Pro | f/2.8 | 1/320s | ISO 100",
      height: 290
    }
  ];

  const filteredPhotos = photos.filter(photo => 
    selectedFilter === 'all' || photo.category === selectedFilter
  );

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F4EF] to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="section-title mb-4">
            Visual <span className="text-[#C39064]">Stories</span>
          </h1>
          <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Every photo tells a story. Every frame captures a moment. 
            Here's my visual journal from the road—both planned and lived.
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto space-y-4 sm:space-y-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3B6943]"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-[#3B6943] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#3B6943] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Square className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-[#3B6943] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {viewMode === 'masonry' ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="break-inside-avoid mb-6 group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo.id)}
                >
                  <div className="card overflow-hidden">
                    <div className="relative">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ height: `${photo.height}px` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      
                      {/* Overlay Info */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium capitalize">
                          {photo.category}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white">
                          <div className="flex items-center space-x-3 text-sm">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {photo.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {photo.votes}
                            </div>
                            <button className="flex items-center hover:text-[#C39064] transition-colors">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{photo.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 space-x-3 mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {photo.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {photo.date}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {photo.story}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo.id)}
                >
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-white font-medium text-sm">{photo.title}</h4>
                      <div className="flex items-center justify-between text-white text-xs mt-1">
                        <span>{photo.location}</span>
                        <div className="flex items-center space-x-2">
                          <span>{photo.votes}♥</span>
                          <span>{photo.views}👁</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Community Voting */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Community Favorites</h2>
          <p className="text-gray-600 mb-8">Vote for your favorite photos—the most loved images get featured!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPhotos.slice(0, 3).sort((a, b) => b.votes - a.votes).map((photo, index) => (
              <div key={photo.id} className="card overflow-hidden">
                <div className="relative">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                    }`}>
                      #{index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold mb-2">{photo.title}</h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>{photo.votes} votes</span>
                    <span>{photo.views} views</span>
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    Vote for This
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Packs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Download Photo Packs</h2>
          <p className="text-gray-600 mb-8">High-resolution collections available for newsletter subscribers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <Camera className="w-12 h-12 text-[#C39064] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kashmir Valley Pack</h3>
              <p className="text-gray-600 text-sm mb-4">15 high-res photos from the planned Kashmir journey</p>
              <p className="text-sm text-gray-500 mb-4">Available after journey completion</p>
              <button className="btn-secondary text-sm px-4 py-2" disabled>
                Coming Soon
              </button>
            </div>
            
            <div className="card p-6">
              <Camera className="w-12 h-12 text-[#C39064] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Planning Journey Pack</h3>
              <p className="text-gray-600 text-sm mb-4">Behind-the-scenes photos from journey preparation</p>
              <p className="text-sm text-gray-500 mb-4">6 photos • 4MB ZIP</p>
              <button className="btn-primary text-sm px-4 py-2">
                Download Free
              </button>
            </div>
            
            <div className="card p-6">
              <Camera className="w-12 h-12 text-[#C39064] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Complete Journey Pack</h3>
              <p className="text-gray-600 text-sm mb-4">Full collection from Kashmir to Kanyakumari</p>
              <p className="text-sm text-gray-500 mb-4">Available Dec 2025 for subscribers</p>
              <button className="btn-secondary text-sm px-4 py-2" disabled>
                Pre-order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const photo = photos.find(p => p.id === selectedPhoto);
              if (!photo) return null;
              
              return (
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full max-h-[70vh] object-cover"
                    />
                    <button 
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-3">{photo.title}</h2>
                        <div className="space-y-2 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {photo.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {photo.date}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{photo.story}</p>
                        <p className="text-sm text-gray-500">{photo.settings}</p>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end space-x-6 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#C39064]">{photo.votes}</div>
                            <div className="text-sm text-gray-600">Votes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#C39064]">{photo.views}</div>
                            <div className="text-sm text-gray-600">Views</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <button className="btn-primary w-full md:w-auto px-6 py-2">
                            <Heart className="w-4 h-4 mr-2" />
                            Vote for This Photo
                          </button>
                          <button className="btn-secondary w-full md:w-auto px-6 py-2">
                            <Download className="w-4 h-4 mr-2" />
                            Download HD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;