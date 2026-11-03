import React from 'react';
import { PiPhoneCall, PiWhatsappLogo } from 'react-icons/pi';
import { BRAND, formatPhone, waLink } from '../data/site';

const FloatingActionButtons = () => (
  <>
    {/* WhatsApp — bottom left, label slides out on desktop hover */}
    <aside className="fixed bottom-5 left-4 z-40 sm:left-6" aria-label="WhatsApp contact">
      <a
        href={waLink('Hi Harikeerth Infratax! I would like to know more about your services.')}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp group relative flex items-center rounded-full p-3.5 text-white transition-all duration-500 ease-out-expo active:scale-95"
        aria-label="Chat with Harikeerth Infratax on WhatsApp"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25C766]/30 [animation-duration:2.5s]" aria-hidden="true" />
        <PiWhatsappLogo className="shrink-0 text-[26px]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-500 ease-out-expo sm:group-hover:ml-2 sm:group-hover:mr-1.5 sm:group-hover:max-w-[160px] sm:group-hover:opacity-100">
          Need help? Chat
        </span>
      </a>
    </aside>

    {/* Call — bottom right */}
    <aside className="fixed bottom-5 right-4 z-40 sm:right-6" aria-label="Phone contact">
      <a
        href={`tel:${BRAND.phone}`}
        className="btn-gold group flex flex-row-reverse items-center rounded-full p-3.5 transition-all duration-500 ease-out-expo active:scale-95"
        aria-label={`Call Harikeerth Infratax at ${formatPhone(BRAND.phone)}`}
      >
        <PiPhoneCall className="shrink-0 text-[26px]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-500 ease-out-expo sm:group-hover:ml-1.5 sm:group-hover:mr-2 sm:group-hover:max-w-[160px] sm:group-hover:opacity-100">
          Call Now
        </span>
      </a>
    </aside>
  </>
);

export default FloatingActionButtons;
