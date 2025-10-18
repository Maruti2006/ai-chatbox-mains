import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LegalGuidance from "../components/LegalGuidance";
import RightsModal from "../components/RightsModal";
import Chatbot from "../components/Chatbot";
import ContactInfo from "../components/ContactInfo";
import { AnimatedBackground } from "./AnimatedBackground";

export default function Home() {
  const [isRightsModalOpen, setRightsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main className="relative z-10 pt-20 min-h-screen px-4 text-white">
        <HeroSection />
        <button
          onClick={() => setRightsModalOpen(true)}
          className="block mx-auto mt-12 px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition"
        >
          View Indian Legal Rights
        </button>
        <LegalGuidance />
        <Chatbot />
        <ContactInfo />
        <RightsModal isOpen={isRightsModalOpen} onClose={() => setRightsModalOpen(false)} />
      </main>
    </>
  );
}
