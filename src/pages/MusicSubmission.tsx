import React, { useState } from 'react';
import { Upload, Music, CheckCircle, AlertCircle, Play, Pause, Volume2 } from 'lucide-react';
import FloatingMusicElements from '../components/animations/FloatingMusicElements';
import MusicNote3D from '../components/animations/MusicNote3D';

const MusicSubmission = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    trackTitle: '',
    genre: '',
    socialMedia: {
      instagram: '',
      spotify: '',
      youtube: '',
      soundcloud: ''
    },
    description: '',
    goals: '',
    budget: '',
    previousWork: ''
  });
  const [files, setFiles] = useState({
    track: null as File | null,
    artwork: null as File | null,
    pressKit: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: keyof typeof files) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const genres = [
    'Hip Hop', 'Pop', 'R&B', 'Rock', 'Electronic', 'Country', 'Jazz', 'Classical',
    'Reggae', 'Folk', 'Blues', 'Punk', 'Metal', 'Indie', 'Alternative', 'Other'
  ];

  return (
    <div className="min-h-screen bg-black py-12 relative overflow-hidden">
      <FloatingMusicElements />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <MusicNote3D className="mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Submit Your Music
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your music to the next level? Submit your tracks for potential featuring on our platform 
            and get discovered by millions of listeners worldwide.
          </p>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Submission Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3">What We're Looking For:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  High-quality, original music
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Professional mixing and mastering
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Unique artistic vision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Strong social media presence
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-300 mb-3">File Requirements:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  Audio: MP3 or WAV (max 50MB)
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  Artwork: JPG or PNG (min 1400x1400px)
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  Press Kit: PDF (optional)
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  Response time: 5-7 business days
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-pink-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Submission Received!</h3>
              <p className="text-gray-300 mb-4">
                Thank you for submitting your music. Our team will review your submission and get back to you within 5-7 business days.
              </p>
              <p className="text-sm text-gray-400">
                Keep creating amazing music! Follow us on social media for updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Artist Information</h2>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="artistName" className="block text-sm font-medium text-gray-300 mb-2">
                    Artist/Band Name *
                  </label>
                  <input
                    type="text"
                    id="artistName"
                    name="artistName"
                    required
                    value={formData.artistName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="Your artist name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="trackTitle" className="block text-sm font-medium text-gray-300 mb-2">
                    Track Title *
                  </label>
                  <input
                    type="text"
                    id="trackTitle"
                    name="trackTitle"
                    required
                    value={formData.trackTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="Your track title"
                  />
                </div>

                <div>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-300 mb-2">
                    Genre *
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    required
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                  >
                    <option value="">Select genre</option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Social Media Presence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="socialMedia.instagram" className="block text-sm font-medium text-gray-300 mb-2">
                      Instagram
                    </label>
                    <input
                      type="url"
                      id="socialMedia.instagram"
                      name="socialMedia.instagram"
                      value={formData.socialMedia.instagram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="https://instagram.com/yourusername"
                    />
                  </div>

                  <div>
                    <label htmlFor="socialMedia.spotify" className="block text-sm font-medium text-gray-300 mb-2">
                      Spotify
                    </label>
                    <input
                      type="url"
                      id="socialMedia.spotify"
                      name="socialMedia.spotify"
                      value={formData.socialMedia.spotify}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="https://open.spotify.com/artist/..."
                    />
                  </div>

                  <div>
                    <label htmlFor="socialMedia.youtube" className="block text-sm font-medium text-gray-300 mb-2">
                      YouTube
                    </label>
                    <input
                      type="url"
                      id="socialMedia.youtube"
                      name="socialMedia.youtube"
                      value={formData.socialMedia.youtube}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="https://youtube.com/channel/..."
                    />
                  </div>

                  <div>
                    <label htmlFor="socialMedia.soundcloud" className="block text-sm font-medium text-gray-300 mb-2">
                      SoundCloud
                    </label>
                    <input
                      type="url"
                      id="socialMedia.soundcloud"
                      name="socialMedia.soundcloud"
                      value={formData.socialMedia.soundcloud}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="https://soundcloud.com/yourusername"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Upload Files</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Track File * (MP3/WAV)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".mp3,.wav"
                        onChange={(e) => handleFileChange(e, 'track')}
                        className="hidden"
                        id="track-upload"
                        required
                      />
                      <label
                        htmlFor="track-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-750 transition-colors duration-200"
                      >
                        <Music className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-400">
                          {files.track ? files.track.name : 'Upload Track'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Artwork (JPG/PNG)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, 'artwork')}
                        className="hidden"
                        id="artwork-upload"
                      />
                      <label
                        htmlFor="artwork-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-750 transition-colors duration-200"
                      >
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-400">
                          {files.artwork ? files.artwork.name : 'Upload Artwork'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Press Kit (PDF)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileChange(e, 'pressKit')}
                        className="hidden"
                        id="presskit-upload"
                      />
                      <label
                        htmlFor="presskit-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-750 transition-colors duration-200"
                      >
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-400">
                          {files.pressKit ? files.pressKit.name : 'Upload Press Kit'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description and Goals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Track Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="Tell us about your track, inspiration, and what makes it unique..."
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Goals *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="What are you hoping to achieve? (streams, followers, exposure, etc.)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Marketing Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1k">$500 - $1,000</option>
                    <option value="1k-2.5k">$1,000 - $2,500</option>
                    <option value="2.5k-5k">$2,500 - $5,000</option>
                    <option value="5k-plus">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="previousWork" className="block text-sm font-medium text-gray-300 mb-2">
                    Previous Marketing Experience
                  </label>
                  <input
                    type="text"
                    id="previousWork"
                    name="previousWork"
                    value={formData.previousWork}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="Any previous campaigns or marketing efforts?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-black px-8 py-4 rounded-lg hover:bg-pink-400 transition-colors duration-200 font-semibold text-lg flex items-center justify-center animate-pulse-glow"
              >
                Submit for Review
                <Music className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>

        {/* Success Stories */}
        <div className="mt-12 bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Alex Rivera</h3>
              <p className="text-gray-400 text-sm">2.4M streams in 3 months</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Luna Martinez</h3>
              <p className="text-gray-400 text-sm">150K new followers gained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Music className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">The Midnight Collective</h3>
              <p className="text-gray-400 text-sm">Featured on 50+ playlists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSubmission;