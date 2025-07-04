
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X } from 'lucide-react';

interface ImageGalleryProps {
  onBack: () => void;
}

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80',
    title: 'Starry Night',
    description: 'Like stars in the darkness, you shine brightest when things seem darkest 🌟'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    title: 'Peaceful Waters',
    description: 'Just like calm waters reflect beauty, your peace reflects your inner strength 🌊'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    title: 'Mountain Serenity',
    description: 'Mountains remind us that even the tallest peaks started as small stones. You\'re growing too 🏔️'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80',
    title: 'Cozy Comfort',
    description: 'Sometimes the smallest comforts bring the biggest peace. You deserve all the coziness 🐱'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&q=80',
    title: 'Safe Space',
    description: 'Every space becomes sacred when filled with love and acceptance, just like you 🏠'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
    title: 'Gentle Grace',
    description: 'Nature moves with gentle grace, just like you - beautifully and purposefully 🦌'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
    title: 'Sunrise Hope',
    description: 'Every sunrise is a reminder that new beginnings are always possible 🌅'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
    title: 'Ocean Calm',
    description: 'The ocean\'s rhythm reminds us to breathe deeply and trust the flow 🌊'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    title: 'Forest Peace',
    description: 'Among the trees, we find quiet strength and gentle wisdom 🌲'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    title: 'Misty Morning',
    description: 'Even in uncertainty, there\'s beauty waiting to be discovered ☁️'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    title: 'Meadow Dreams',
    description: 'Like flowers in a meadow, you bloom in your own perfect time 🌸'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80',
    title: 'Golden Hour',
    description: 'You are your own golden hour - warm, beautiful, and irreplaceable ✨'
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Sanctuary</span>
          </Button>
          <h1 className="text-2xl font-light text-gray-700">Peaceful Gallery</h1>
          <div className="w-24"></div>
        </div>

        <p className="text-center text-gray-600 mb-8 animate-fade-in">
          A collection of peaceful moments to bring you comfort 💜
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/70 backdrop-blur-sm border-0 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-700 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden animate-scale-in">
              <Button
                onClick={() => setSelectedImage(null)}
                variant="ghost"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-light text-gray-800 mb-3">{selectedImage.title}</h2>
                <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
