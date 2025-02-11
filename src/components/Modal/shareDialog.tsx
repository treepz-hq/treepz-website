'use client';

import React, { useRef, useState } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { Dialog } from '@headlessui/react';
import { socialIcon } from '@/lib/dummyData';
import Copy from "@/assets/svgs/copy.svg";

const ShareDialog = () => {
  const { isModalVisible, hideModal } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const link = 'https://treepz.com/report';

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setNotification("Link copied to clipboard!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        setNotification("Failed to copy link.");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      });
  };

  const handleShare = (platform: string) => {
    const encodedLink = encodeURIComponent(link);
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodedLink}`, '_blank');
        break;
      case 'slack':
        window.open(`https://slack.com/intl/en-us/share?url=${encodedLink}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`, '_blank');
        break;
      default:
        break;
    }
  };

  if (!isModalVisible) return null;

  return (
    <Dialog open={isModalVisible} onClose={hideModal}>
      <div className="fixed inset-0 bg-transparent bg-opacity-75 z-50" />
      <div className="fixed inset-0 flex items-center justify-self-center z-50">
        <div className='border-b pb-2 mx-2 border-b-white bg-white rounded-2xl'>
          <Dialog.Panel className="bg-white p-4 rounded-2xl shadow-lg w-98">
            <div className="flex justify-between items-center mb-2">
              <Dialog.Title className="font-medium text-[#212529] text-lg p-2">Share to</Dialog.Title>
              <button
                onClick={hideModal}
                className="bg-[#F7F7F7] text-[#1C274C] text-sm px-2 rounded-[32px] mr-2"
                aria-label="Close dialog"
              >
                X
              </button>
            </div>
            <Dialog.Description>
              <div>
                {/* Social Media Share Icons */}
                <div className="flex justify-between w-full items-center space-x-4 mb-2">
                  {socialIcon.map((social, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center">
                      <button
                        // key={index}
                        onClick={() => handleShare(social.description.toLowerCase())}
                        className="p-2 rounded-full text-black"
                        aria-label={`Share via ${social.description}`}
                      >
                        {social.icon}
                      </button>
                      <span className='text-[#6F7174] font-medium text-center'>{social.description}</span>
                    </div>
                  ))}
                </div>
                {/* Link input to copy */}
                <p className="p-2 text-[#212529] text-base text-bold">Copy Page Link</p>
                <div className="flex bg-[#F8F9FB] rounded-md justify-between items-center mb-4">
                  <input
                    ref={inputRef}
                    type="text"
                    className="px-5 bg-[#F8F9FB] text-[#6F7174] text-sm focus:outline-none w-full"
                    value={link}
                    readOnly
                    spellCheck={false}
                  />
                  <button
                    onClick={handleCopy}
                    className="mr-2 p-2 rounded-md"
                  >
                    <span className="">
                      <Copy />
                    </span>
                  </button>
                </div>

                {/* Notification Message (if exists) */}
                {notification && (
                  <div className="text-center text-sm text-[#28a745] mt-2">
                    {notification}
                  </div>
                )}
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ShareDialog;
