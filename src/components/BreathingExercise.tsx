
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BreathingExerciseProps {
  onBack: () => void;
}

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ onBack }) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [seconds, setSeconds] = useState(4);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 1) {
            // Move to next phase
            if (phase === 'inhale') {
              setPhase('hold');
              return 4;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return 6;
            } else {
              setPhase('inhale');
              setCycle(c => c + 1);
              return 4;
            }
          }
          return seconds - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phase]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In...';
      case 'hold':
        return 'Hold...';
      case 'exhale':
        return 'Breathe Out...';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale':
        return 'scale-110';
      case 'hold':
        return 'scale-110';
      case 'exhale':
        return 'scale-90';
    }
  };

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setSeconds(4);
    setCycle(0);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setSeconds(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back
          </Button>
          <h1 className="text-xl font-light text-gray-700">Gentle Breathing</h1>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* Instructions */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mb-8 animate-fade-in">
          <div className="p-6 text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              Find a comfortable position and breathe along with the gentle rhythm. 
              This exercise will help calm your mind and body.
            </p>
            <p className="text-sm text-gray-500">
              4 seconds in • 4 seconds hold • 6 seconds out
            </p>
          </div>
        </Card>

        {/* Breathing Circle */}
        <div className="text-center mb-8">
          <div className="relative inline-flex items-center justify-center">
            {/* Outer circle */}
            <div className="w-64 h-64 rounded-full border-2 border-teal-200 opacity-30"></div>
            
            {/* Animated circle */}
            <div className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-teal-200 to-blue-300 transition-transform duration-1000 ease-in-out ${getCircleScale()}`}>
              <div className="w-full h-full flex flex-col items-center justify-center text-white">
                <div className="text-2xl font-light mb-2">
                  {getPhaseText()}
                </div>
                <div className="text-4xl font-light">
                  {seconds}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="text-center space-y-4">
          {!isActive ? (
            <Button
              onClick={startExercise}
              className="bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white border-0 rounded-full px-8 py-4 text-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Start Breathing 🌸
            </Button>
          ) : (
            <div className="space-y-4">
              <Button
                onClick={stopExercise}
                variant="outline"
                className="border-teal-300 text-teal-700 hover:bg-teal-50 rounded-full px-8 py-3"
              >
                Pause
              </Button>
              <p className="text-sm text-gray-500">
                Cycle {cycle + 1} • Keep breathing gently
              </p>
            </div>
          )}
        </div>

        {/* Encouraging Message */}
        {cycle >= 3 && (
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl mt-8 animate-fade-in">
            <div className="p-6 text-center">
              <p className="text-gray-600 leading-relaxed">
                You're doing beautifully 💜 Notice how your body feels now. 
                Take this sense of calm with you.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BreathingExercise;
