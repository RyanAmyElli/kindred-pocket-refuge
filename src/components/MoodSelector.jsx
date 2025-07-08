
import React from 'react';
import { Card } from '@/components/ui/card';

const moods = [
  { id: 'sad', label: 'Open when sad', emoji: '💌', color: 'from-blue-200 to-indigo-200', hoverColor: 'hover:from-blue-300 hover:to-indigo-300' },
  { id: 'scared', label: 'Open when scared', emoji: '💌', color: 'from-purple-200 to-pink-200', hoverColor: 'hover:from-purple-300 hover:to-pink-300' },
  { id: 'insecure', label: 'Open when insecure', emoji: '💌', color: 'from-amber-200 to-orange-200', hoverColor: 'hover:from-amber-300 hover:to-orange-300' },
  { id: 'overwhelmed', label: 'Open when overwhelmed', emoji: '💌', color: 'from-green-200 to-teal-200', hoverColor: 'hover:from-green-300 hover:to-teal-300' },
  { id: 'lonely', label: 'Open when lonely', emoji: '💌', color: 'from-rose-200 to-pink-200', hoverColor: 'hover:from-rose-300 hover:to-pink-300' },
  { id: 'anxious', label: 'Open when anxious', emoji: '💌', color: 'from-slate-200 to-gray-200', hoverColor: 'hover:from-slate-300 hover:to-gray-300' },
];

const MoodSelector = ({ onMoodSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-light text-gray-600 text-center mb-6 animate-fade-in">
        How are you feeling right now?
      </h2>
      
      <div className="space-y-3">
        {moods.map((mood, index) => (
          <Card
            key={mood.id}
            className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rotate-1 bg-white/90 backdrop-blur-sm border-2 border-gray-200 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onMoodSelect(mood.id)}
          >
            {/* Envelope flap effect */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-100 to-transparent opacity-60"></div>
            <div className={`p-6 rounded-lg bg-gradient-to-r ${mood.color} ${mood.hoverColor} transition-all duration-300 relative`}>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl transform transition-transform duration-300 group-hover:scale-110">{mood.emoji}</div>
                <div>
                  <h3 className="font-semibold text-gray-700 text-lg tracking-wide">{mood.label}</h3>
                  <p className="text-sm text-gray-600 mt-2 italic">A letter of comfort awaits</p>
                </div>
              </div>
              {/* Letter seal effect */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-400 rounded-full opacity-70"></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
