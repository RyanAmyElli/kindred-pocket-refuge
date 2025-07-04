
import React from 'react';
import { Card } from '@/components/ui/card';

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void;
}

const moods = [
  { id: 'sad', label: 'Feeling Sad', emoji: '💙', color: 'from-blue-200 to-indigo-200', hoverColor: 'hover:from-blue-300 hover:to-indigo-300' },
  { id: 'scared', label: 'Feeling Scared', emoji: '🤗', color: 'from-purple-200 to-pink-200', hoverColor: 'hover:from-purple-300 hover:to-pink-300' },
  { id: 'insecure', label: 'Feeling Insecure', emoji: '🌟', color: 'from-amber-200 to-orange-200', hoverColor: 'hover:from-amber-300 hover:to-orange-300' },
  { id: 'overwhelmed', label: 'Feeling Overwhelmed', emoji: '🌿', color: 'from-green-200 to-teal-200', hoverColor: 'hover:from-green-300 hover:to-teal-300' },
  { id: 'lonely', label: 'Feeling Lonely', emoji: '💜', color: 'from-rose-200 to-pink-200', hoverColor: 'hover:from-rose-300 hover:to-pink-300' },
  { id: 'anxious', label: 'Feeling Anxious', emoji: '🕊️', color: 'from-slate-200 to-gray-200', hoverColor: 'hover:from-slate-300 hover:to-gray-300' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-light text-gray-600 text-center mb-6 animate-fade-in">
        How are you feeling right now?
      </h2>
      
      <div className="space-y-3">
        {moods.map((mood, index) => (
          <Card
            key={mood.id}
            className="cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-xl bg-white/50 backdrop-blur-sm border-0 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onMoodSelect(mood.id)}
          >
            <div className={`p-4 rounded-lg bg-gradient-to-r ${mood.color} ${mood.hoverColor} transition-all duration-200`}>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{mood.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700">{mood.label}</h3>
                  <p className="text-sm text-gray-500 mt-1">Tap to read your letter</p>
                </div>
                <div className="text-gray-400">→</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
