
import React from 'react';
import { Card } from '@/components/ui/card';
import letterSad from '@/assets/letter-sad.jpg';
import letterScared from '@/assets/letter-scared.jpg';
import letterInsecure from '@/assets/letter-insecure.jpg';
import letterOverwhelmed from '@/assets/letter-overwhelmed.jpg';
import letterLonely from '@/assets/letter-lonely.jpg';
import letterAnxious from '@/assets/letter-anxious.jpg';

const moods = [
  { id: 'sad', label: 'Open when sad', image: letterSad },
  { id: 'scared', label: 'Open when scared', image: letterScared },
  { id: 'insecure', label: 'Open when insecure', image: letterInsecure },
  { id: 'overwhelmed', label: 'Open when overwhelmed', image: letterOverwhelmed },
  { id: 'lonely', label: 'Open when lonely', image: letterLonely },
  { id: 'anxious', label: 'Open when anxious', image: letterAnxious },
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
            className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white border-0 animate-fade-in relative overflow-hidden group rounded-lg"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => onMoodSelect(mood.id)}
          >
            <div className="relative h-48">
              <img 
                src={mood.image} 
                alt={mood.label}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
