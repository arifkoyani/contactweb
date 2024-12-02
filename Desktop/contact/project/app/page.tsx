"use client"
import { use, useEffect, useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { Github, Facebook, Instagram, Globe, MessageCircle, Music2 } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

useEffect(()=>{
setInterval(()=>{
  setAlert(true);
},1000)
},[])

  if (!mounted) return null;

  const icon = <IconInfoCircle />;
  const socialLinks = [
    {
      name: "Website",
      icon: <Globe className="w-6 h-6" />,
      url: "https://arifkoyani.vercel.app/",
      color: "hover:bg-[#7191e6]",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/arifkoyani/",
      color: "hover:bg-[#3d52a0]",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/0923188278882",
      color: "hover:bg-[#8697c3]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/arifkoyani/",
      color: "hover:bg-[#7191e6]",
    },
    {
      name: "TikTok",
      icon: <Music2 className="w-6 h-6" />,
      url: "https://www.tiktok.com/@arifkoyani",
      color: "hover:bg-[#3d52a0]",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/arifkoyani",
      color: "hover:bg-[#8697c3]",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {
        alert && (
          <Notification>
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>
        )
      }
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7191e6] via-[#3d52a0] to-[#8697c3]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] animate-slide"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white">
        {/* Alert Section */}
     

        <h1 className="text-4xl font-bold text-center mb-2">Jazakallah ul khair</h1>
        <p className="text-sm font-light text-center mb-12 opacity-90">
          May Allah reward you with goodness
        </p>

        <div className="w-full space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              className={`flex target-blank items-center justify-center space-x-3 w-full p-4 rounded-lg 
                bg-white/10 backdrop-blur-sm transition-all duration-300 
                ${link.color} hover:scale-105`}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
