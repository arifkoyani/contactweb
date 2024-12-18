"use client";
import { use, useEffect, useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import { Toaster, toast } from "sonner";
import Ayatains from "../Ayats/page";
import Blockquotee from "../Ayats/Blockquote/page";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import {
  Github,
  Facebook,
  Instagram,
  Globe,
  MessageCircle,
  Music2,
} from "lucide-react";
import SignUpForm from "@/SignUp/page";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setInterval(() => {
      toast.loading("May Allah reward you for your good deeds. 🌟🙏");
    }, 8000);
  }, []);

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
    <>
      <Toaster />

      <main className="min-h-screen bg-black overflow-hidden">
        <Blockquotee />

        <div className=" relative z-10 max-w-md mx-auto  flex flex-col items-center justify-center px-4 py-2 text-white">
          <h1 className="text-4xl font-bold text-center mb-2">
            Jazakallah ul khair
          </h1>
          <p className="text-sm font-light text-center mb-5 opacity-90">
            May Allah reward you with goodness
          </p>

          <div className="w-full space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                className={`flex target-blank items-center justify-center space-x-3 w-full p-4 rounded-lg 
                bg-white/10 backdrop-blur-sm transition-all duration-300  hover:scale-110`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center w-screen">
            <Modal
              opened={opened}
              onClose={close}
              title="Authentication"
              centered // Centers the modal
              size="screen" // Automatically adjusts to the content size
              styles={{
                content: { padding: "16px" }, // Adjusts padding for the content
              }}
            >
            </Modal>

            <div>

            <div>

<Button
  variant="white"
  className="bg-white text-orange-500 px-10"
  onClick={open}
>
  Fill the FORM
</Button>

<div>

<Ayatains/>
</div>
</div>
            </div>
          </div>

          

       
        </div>

        <SignUpForm />

      </main>
    </>
  );
}
