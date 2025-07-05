
import React from 'react';

const BreathingCircle = ({ phase, seconds }) => {
  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In...';
      case 'hold': return 'Hold...';
      case 'exhale': return 'Breathe Out...';
      default: return '';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale': return 'scale-110';
      case 'hold': return 'scale-110';
      case 'exhale': return 'scale-90';
      default: return 'scale-100';
    }
  };

  return (
    <div className="text-center mb-8">
      <div className="relative inline-flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-2 border-teal-200 opacity-30"></div>
        <div className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-teal-200 to-blue-300 transition-transform duration-1000 ease-in-out ${getCircleScale()}`}>
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <div className="text-2xl font-light mb-2">{getPhaseText()}</div>
            <div className="text-4xl font-light">{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathingCircle;
