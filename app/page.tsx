'use client';
import React, { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

// Removed local interface and global declaration

const ChatbotUI = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      if (typeof window !== 'undefined' && window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '67780033ae2ed1739d0b87bb' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Salary Finance Chat Assistant! 👋
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Click the chat icon in the bottom right to start a conversation
            </h2>

            <div className="mt-6">
              <p className="text-lg text-gray-600 mb-2">
                Our AI assistant is a demo to help you with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                  FAQs
                </li>
                <li className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                  Requests to speak to a human
                </li>
              </ul>
            </div>

            <div 
              className="fixed bottom-48 right-24 text-6xl animate-bounce cursor-pointer"
              onClick={() => {
                const chatButton = document.querySelector('.vf-chat-button') as HTMLElement;
                if (chatButton) chatButton.click();
              }}
            >
              ↘️
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600">
              Our AI assistant is available 24/7 to answer your questions and guide you through our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;
