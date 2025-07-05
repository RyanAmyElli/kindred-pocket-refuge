
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from './Header';
import BreathingCircle from './BreathingCircle';

const BreathingExercise = ({ onBack }) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('inhale');
  const [seconds, setSeconds] = useState(4);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 1) {
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
        <Header onBack={onBack} title="Gentle Breathing" />

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

        <BreathingCircle phase={phase} seconds={seconds} />

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
