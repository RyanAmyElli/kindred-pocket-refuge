
import React from 'react';
import { MOODS } from '../constants/moods';
import MoodCard from './MoodCard';

const MoodSelector = ({ onMoodSelect }) => (
  <div>
    <h2 className="text-xl font-light text-gray-600 text-center mb-6 animate-fade-in">
      How are you feeling right now?
    </h2>
    
    <div className="space-y-3">
      {MOODS.map((mood, index) => (
        <MoodCard
          key={mood.id}
          mood={mood}
          index={index}
          onSelect={onMoodSelect}
        />
      ))}
    </div>
  </div>
);

export default MoodSelector;
