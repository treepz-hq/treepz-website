// 'use client';

// import React from 'react'; // Make sure React is imported
// import { useModal } from '@/contexts/ModalContext';
// import { Dialog } from '@headlessui/react';
// import Image from 'next/image';

// const ShareDialog = () => {
//   const { isModalVisible, hideModal } = useModal();

//   const inputRef = React.useRef<HTMLInputElement>(null);
//   // Ref to access the input element
//   const link = "https://example.com/page/123"; // This will be the link you want to share

//   // Handler to manage copy event
//   const handleCopy = () => {
//     navigator.clipboard.writeText(link);
//     alert('Link copied to clipboard!');
//   };

//   // Prevent paste, cut, and drag actions
//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     alert('Pasting is not allowed.');
//   };

//   const handleCut = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     alert('Cutting is not allowed.');
//   };

//   const handleDragStart = (e: React.DragEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     alert('Dragging the link is not allowed.');
//   };

//   // Focus handling to ensure the entire text is selected when clicked
//   const handleFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.setSelectionRange(0, inputRef.current.value.length);
//     }
//   };

//   // Blur handling to remove selection when focus is lost
//   const handleBlur = () => {
//     if (inputRef.current) {
//       inputRef.current.setSelectionRange(0, 0);
//     }
//   };

//   const handleShare = (platform: string) => {
//     const encodedLink = encodeURIComponent(link);
//     switch (platform) {
//       case 'whatsapp':
//         window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
//         break;
//       case 'twitter':
//         window.open(`https://twitter.com/intent/tweet?url=${encodedLink}`, '_blank');
//         break;
//       case 'slack':
//         window.open(`https://slack.com/intl/en-us/share?url=${encodedLink}`, '_blank');
//         break;
//       case 'facebook':
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`, '_blank');
//         break;
//       default:
//         break;
//     }
//   };

//   if (!isModalVisible) return null;

//   return (
//     <Dialog open={isModalVisible} onClose={hideModal}>
//       <div className="fixed inset-0 bg-transparent bg-opacity-75 z-50" />
//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <Dialog.Panel className="bg-white p-8 rounded-2xl shadow-lg w-96">
//           <div className="flex justify-between items-center">
//             <Dialog.Title className="font-mono mb-4">Share to</Dialog.Title>
//             <button
//               onClick={hideModal}
//               className="bg-gray-200 text-black px-4 py-2 rounded-2xl"
//             >
//               X
//             </button>
//           </div>
//           <Dialog.Description>
//             <div>
//               <div className="flex space-x-4 mb-4">
//                 <button onClick={() => handleShare('whatsapp')} className="p-2 rounded-full bg-green-500 text-white">
//                   <Image
//                     src="/images/whatsapp.png"
//                     alt="WhatsApp"
//                     width={40}
//                     height={20}
//                   />
//                 </button>
//                 <button onClick={() => handleShare('twitter')} className="p-2 rounded-full bg-blue-500 text-white">
//                   <Image
//                     src="/images/twitter.png"
//                     alt="Twitter"
//                     width={40}
//                     height={20}
//                   />
//                 </button>
//                 <button onClick={() => handleShare('slack')} className="p-2 rounded-full bg-purple-500 text-white">
//                   <Image
//                     src="/images/slack.png"
//                     alt="Slack"
//                     width={40}
//                     height={20}
//                   />
//                 </button>
//                 <button onClick={() => handleShare('facebook')} className="p-2 rounded-full bg-blue-700 text-white">
//                   <Image src="/images/facebook.png" alt="Facebook"
//                     width={40}
//                     height={20}
//                   />
//                 </button>
//               </div>
//               <p className='p-3'>Copy Page link</p>
//               <div className="flex bg-gray-100 rounded-md justify-between items-center mb-4">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   className="px-4 py-2 bg-transparent focus:outline-none w-full"
//                   value={link}
//                   readOnly
//                   spellCheck={false}
//                   onClick={(e) => e.target.select()}
//                   onCopy={handleCopy}
//                   onPaste={handlePaste}
//                   onCut={handleCut}
//                   onDragStart={handleDragStart}
//                   onFocus={handleFocus}
//                   onBlur={handleBlur}
//                 />
//                 <button
//                   onClick={handleCopy}
//                   className="mr-2 border border-black p-2 rounded-md"
//                 >
//                   <Image
//                     src="/images/clipboard.png"
//                     alt="Copy"
//                     width={10}
//                     height={2}
//                   />
//                 </button>
//               </div>
//             </div>
//           </Dialog.Description>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default ShareDialog;


'use client';

import React from 'react'; 
import { useModal } from '@/contexts/ModalContext';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

const ShareDialog = () => {
  const { isModalVisible, hideModal } = useModal();

  const inputRef = React.useRef<HTMLInputElement>(null); 
  const link = "https://treepz.com/reports/mobility-2025"; 

  // Handler to manage copy event
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  // Prevent paste, cut, and drag actions
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert('Pasting is not allowed.');
  };

  const handleCut = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert('Cutting is not allowed.');
  };

  const handleDragStart = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert('Dragging the link is not allowed.');
  };

  // Focus handling to ensure the entire text is selected when clicked
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, inputRef.current.value.length);
    }
  };

  // Blur handling to remove selection when focus is lost
  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, 0);
    }
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
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <Dialog.Panel className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="font-mono">Share to</Dialog.Title>
            <button
              onClick={hideModal}
              className="bg-gray-200 text-black px-4 py-2 rounded-full"
              aria-label="Close dialog"
            >
              X
            </button>
          </div>
          <Dialog.Description>
            <div>
              <div className="flex justify-between space-x-4 mb-4">
                <button onClick={() => handleShare('whatsapp')} className="p-2 rounded-full bg-green-500 text-white">
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    width={50}
                    height={30}
                    className="object-contain"
                  />
                </button>
                <button onClick={() => handleShare('twitter')} className="p-2 rounded-full bg-blue-500 text-white">
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={50}
                    height={30}
                    className="object-contain"
                  />
                </button>
                <button onClick={() => handleShare('slack')} className="p-2 rounded-full bg-purple-500 text-white">
                  <Image
                    src="/images/slack.png"
                    alt="Slack"
                    width={50}
                    height={30}
                    className="object-contain"
                  />
                </button>
                <button onClick={() => handleShare('facebook')} className="p-2 rounded-full bg-blue-700 text-white">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={50}
                    height={30}
                    className="object-contain"
                  />
                </button>
              </div>
              <p className='p-3'>Copy Page link</p>
              <div className="flex bg-gray-100 rounded-md justify-between items-center mb-4">
                <input
                  ref={inputRef}
                  type="text"
                  className="px-4  bg-transparent focus:outline-none w-full"
                  value={link}
                  readOnly
                  spellCheck={false}
                  onClick={(e) => e.target.select()}
                  onCopy={handleCopy}
                  onPaste={handlePaste}
                  onCut={handleCut}
                  onDragStart={handleDragStart}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button
                  onClick={handleCopy}
                  className="mr-2 border border-black p-2 rounded-md"
                >
                  <Image
                    src="/images/clipboard.png"
                    alt="Copy"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ShareDialog;
