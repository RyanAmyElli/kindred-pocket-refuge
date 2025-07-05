
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { MOOD_LETTERS } from '../constants/moodLetters';

const MoodLetter = ({ mood, onBack, onBreathing }) => {
  const letter = MOOD_LETTERS[mood];

  if (!letter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 p-4 flex items-center justify-center">
        <Card className="p-6 text-center bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <p className="text-gray-600">Letter not found</p>
          <Button onClick={onBack} className="mt-4">Go Back</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={letter.image}
          alt="Calming scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 rounded-full"
          >
            ← Back
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-8 relative z-10">
        {/* Letter Card */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-scale-in">
          <div className="p-6">
            <h1 className="text-2xl font-light text-gray-700 mb-6 text-center">
              {letter.title}
            </h1>
            
            <div className="prose prose-sm max-w-none">
              {letter.letter.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4 pb-8">
          <Button
            onClick={onBreathing}
            className="w-full bg-gradient-to-r from-teal-300 to-blue-300 hover:from-teal-400 hover:to-blue-400 text-white border-0 rounded-full py-4 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            Try a Breathing Exercise
          </Button>
          
          <div className="text-center">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-gray-500 hover:text-gray-700"
            >
              Choose a Different Mood
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodLetter;
