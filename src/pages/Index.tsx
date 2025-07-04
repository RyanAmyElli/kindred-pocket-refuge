
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MoodSelector from '@/components/MoodSelector';
import MoodLetter from '@/components/MoodLetter';
import BreathingExercise from '@/components/BreathingExercise';
import { Heart } from 'lucide-react';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showBreathing, setShowBreathing] = useState(false);

  const resetToHome = () => {
    setSelectedMood(null);
    setShowBreathing(false);
  };

  if (showBreathing) {
    return <BreathingExercise onBack={() => setShowBreathing(false)} />;
  }

  if (selectedMood) {
    return (
      <MoodLetter 
        mood={selectedMood} 
        onBack={resetToHome}
        onBreathing={() => setShowBreathing(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center py-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-200 to-purple-200 rounded-full mb-4 shadow-lg">
            <Heart className="w-8 h-8 text-rose-600" />
          </div>
          <h1 className="text-3xl font-light text-gray-700 mb-2">Sanctuary</h1>
          <p className="text-gray-500 text-sm leading-relaxed px-4">
            Your safe space, always here for you ✨
          </p>
        </div>

        {/* Welcome Message */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mb-8 animate-scale-in">
          <div className="p-6 text-center">
            <p className="text-gray-600 leading-relaxed">
              Hey beautiful soul 💜 Whatever you're feeling right now is valid. 
              Take a deep breath and know that you're not alone. 
              I'm here for you, always.
            </p>
          </div>
        </Card>

        {/* Mood Selector */}
        <MoodSelector onMoodSelect={setSelectedMood} />

        {/* Quick Breathing Exercise */}
        <div className="mt-8 text-center animate-fade-in">
          <Button
            onClick={() => setShowBreathing(true)}
            className="bg-gradient-to-r from-teal-300 to-blue-300 hover:from-teal-400 hover:to-blue-400 text-white border-0 rounded-full px-8 py-3 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Take a Gentle Breath 🌸
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-xs text-gray-400">
            Made with love for you 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
