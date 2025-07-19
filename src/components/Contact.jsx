import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_o1m8aeg',    
        'template_siphoel',   
        formRef.current,
        'p_JWlW6PKzYfydKnp'    
      )
      .then(
        () => {
          console.log('Email sent successfully!');
          alert('Message sent!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300">I'm always open to new opportunities and collaborations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:yuvikajindal241106@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    yuvikajindal241106@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Ghaziabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-bold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yuvika2411"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-600 transition-colors"
                >
                  <Github size={20} className="text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvika-jindal-6b3181328/"
                  className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  <Linkedin size={20} className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
