import React, { useState } from 'react';
import { Package2, Navigation, Shield, MapPin, Clock, MessageSquare, Menu, X, Car, Users, ChevronDown } from 'lucide-react';

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <button onClick={onClose} className="p-2 float-right">
            <X className="h-6 w-6" />
          </button>
          <nav className="mt-16">
            <ul className="space-y-4">
              <li><a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">Book a Ride</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">Send Package</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">Become a Driver</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">Track</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [serviceType, setServiceType] = useState<'ride' | 'package'>('ride');

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-purple-600" />
            <span className="ml-2 font-bold text-xl">Trip & Track</span>
          </div>
          <button onClick={() => setIsNavOpen(true)} className="p-2 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-purple-600">Book a Ride</a></li>
              <li><a href="#" className="hover:text-purple-600">Send Package</a></li>
              <li><a href="#" className="hover:text-purple-600">Become a Driver</a></li>
              <li><a href="#" className="hover:text-purple-600">Track</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Travel & Ship Together
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Share rides and send packages with verified travelers. Save time and money.
              </p>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex gap-4 mb-4 border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setServiceType('ride')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold ${serviceType === 'ride' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <Car className="h-5 w-5 inline-block mr-2" />
                    Ride
                  </button>
                  <button 
                    onClick={() => setServiceType('package')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold ${serviceType === 'package' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <Package2 className="h-5 w-5 inline-block mr-2" />
                    Package
                  </button>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pickup location"
                    className="w-full p-2 border-b border-gray-200 text-gray-800 focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Navigation className="h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Drop-off location"
                    className="w-full p-2 border-b border-gray-200 text-gray-800 focus:outline-none focus:border-purple-600"
                  />
                </div>
                {serviceType === 'ride' && (
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="h-6 w-6 text-gray-400" />
                    <select className="w-full p-2 border-b border-gray-200 text-gray-800 focus:outline-none focus:border-purple-600 bg-white">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                    </select>
                  </div>
                )}
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  {serviceType === 'ride' ? 'Find Rides' : 'Find Carriers'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why people love Trip & Track</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Shared Economy</h3>
                <p className="text-gray-600">Share rides and delivery costs with others going your way</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Verified drivers and real-time tracking for peace of mind</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MessageSquare className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
                <p className="text-gray-600">Chat directly with your driver or carrier</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl text-white p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Trip & Track App</h2>
                <p className="text-xl mb-8 text-purple-200">
                  Book rides and send packages on the go. Available for iOS and Android.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center">
                    <span>Download on App Store</span>
                  </button>
                  <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center">
                    <span>Get it on Google Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Trip & Track. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;