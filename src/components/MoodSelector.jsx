
import React from 'react';
import { Card } from '@/components/ui/card';
import { LetterText } from 'lucide-react';

const moods = [
  { id: 'sad', label: 'Open when sad', image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop', color: 'from-blue-100/80 to-indigo-100/80' },
  { id: 'scared', label: 'Open when scared', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop', color: 'from-purple-100/80 to-pink-100/80' },
  { id: 'insecure', label: 'Open when insecure', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop', color: 'from-amber-100/80 to-orange-100/80' },
  { id: 'overwhelmed', label: 'Open when overwhelmed', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop', color: 'from-green-100/80 to-teal-100/80' },
  { id: 'lonely', label: 'Open when lonely', image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop', color: 'from-rose-100/80 to-pink-100/80' },
  { id: 'anxious', label: 'Open when anxious', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop', color: 'from-slate-100/80 to-gray-100/80' },
];

const MoodSelector = ({ onMoodSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-light text-gray-600 text-center mb-6 animate-fade-in">
        How are you feeling right now?
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {moods.map((mood, index) => (
          <Card
            key={mood.id}
            className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white border-2 border-gray-200 animate-fade-in relative overflow-hidden group"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => onMoodSelect(mood.id)}
          >
            {/* Letter envelope styling */}
            <div className="relative h-40">
              {/* Background image with overlay */}
              <img 
                src={mood.image} 
                alt="" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} mix-blend-overlay`}></div>
              
              {/* Envelope flap */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[40px] border-l-transparent border-r-transparent border-b-white/90"></div>
              
              {/* Letter icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <LetterText className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
              </div>
              
              {/* Wax seal */}
              <div className="absolute top-3 right-3 w-6 h-6 bg-red-500 rounded-full border-2 border-red-600 shadow-lg"></div>
            </div>
            
            {/* Letter content */}
            <div className="p-4 bg-white">
              <h3 className="font-serif text-gray-700 text-center text-sm font-medium tracking-wide">
                {mood.label}
              </h3>
              <p className="text-xs text-gray-500 text-center mt-2 italic">
                A letter waiting for you
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
