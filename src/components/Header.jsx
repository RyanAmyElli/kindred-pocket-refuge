
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = ({ onBack, title }) => (
  <div className="flex items-center justify-between mb-8 pt-4">
    <Button
      onClick={onBack}
      variant="ghost"
      className="text-gray-600 hover:text-gray-800"
    >
      ← Back
    </Button>
    <h1 className="text-xl font-light text-gray-700">{title}</h1>
    <div className="w-16" />
  </div>
);

export default Header;
