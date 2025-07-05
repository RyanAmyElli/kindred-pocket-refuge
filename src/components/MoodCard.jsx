
import React from 'react';
import { Card } from '@/components/ui/card';

const MoodCard = ({ mood, index, onSelect }) => (
  <Card
    className="cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-xl bg-white/50 backdrop-blur-sm border-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
    onClick={() => onSelect(mood.id)}
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
);

export default MoodCard;
