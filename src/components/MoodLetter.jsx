import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const moodLetters = {
  sad: {
    title: "When Sadness Visits You 💙",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    letter: `My dearest friend,

I see you carrying this heavy feeling, and I want you to know that it's okay to feel sad. Sadness isn't your enemy - it's proof that you have a heart that feels deeply, that loves deeply.

Your sadness is valid. You don't need to fix it or push it away. Sometimes we need to sit with our feelings, like sitting with an old friend who needs comfort.

Remember when we laughed until our stomachs hurt? Remember how the sun felt on your face last week? Those moments of joy are still part of you, waiting patiently for when you're ready.

You are so much stronger than you know, and this feeling will pass like clouds in the sky. I believe in you completely.

With all my love,
Your friend who sees your light even in the darkness ✨`
  },
  scared: {
    title: "When Fear Feels Too Big 🤗",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    letter: `Sweet soul,

I know fear can feel like a monster in the dark, making everything seem bigger and scarier than it really is. But here's what I want you to remember: you've been scared before, and you've made it through every single time.

Fear is just your heart trying to protect you. Thank it for caring, then remind yourself of all the brave things you've already done. Remember when you thought you couldn't handle that difficult situation, but you did? You're braver than you believe.

You don't have to be fearless to be brave. Courage is feeling scared and choosing to keep going anyway. And you, my dear friend, have more courage in your little finger than most people have in their whole body.

Take it one breath at a time. I'm here with you.

Love and courage,
Your biggest supporter 🌟`
  },
  insecure: {
    title: "You Are Enough, Just As You Are 🌟",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop",
    letter: `Beautiful human,

Those voices in your head telling you that you're not enough? They're lying. They're not even your voices - they're echoes of old wounds, old fears, old stories that never belonged to you.

I wish you could see yourself through my eyes. I see someone who cares deeply, who tries hard, who has overcome so much already. I see your kindness, your strength, your unique way of seeing the world that no one else can replicate.

You don't need to be perfect. You don't need to have it all figured out. You don't need to be anyone other than exactly who you are in this moment.

Your worth isn't determined by your achievements, your appearance, or anyone else's opinion. You are inherently valuable, simply because you exist.

You are enough. You have always been enough.

With deep love and admiration,
Someone who knows your true worth 💕`
  },
  overwhelmed: {
    title: "When Everything Feels Like Too Much 🌿",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    letter: `My overwhelmed friend,

I see you juggling so many things, feeling like you're drowning in responsibilities and expectations. Take a deep breath with me right now. In... and out...

It's okay to feel overwhelmed. It means you care about many things, and that's actually beautiful. But right now, we need to help you find some solid ground to stand on.

You don't have to do everything today. You don't have to be everything to everyone. Sometimes the most productive thing you can do is rest, breathe, and choose just one small thing to focus on.

Remember: You can only do your best with what you have right now. Your best is enough, even when it doesn't feel like it.

Let's break this down together, one tiny step at a time. You've got this, and I've got you.

With love and calm energy,
Your anchor in the storm ⚓`
  },
  lonely: {
    title: "You Are Never Truly Alone 💜",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    letter: `Precious soul,

Loneliness can feel like being the only person in the world, like no one understands or truly sees you. But I want you to know that even in your loneliest moments, you are connected to something bigger.

You are part of this beautiful, messy, complicated human experience that we're all sharing. Right now, somewhere in the world, someone else is feeling exactly what you're feeling. You're not alone in being alone.

I am thinking of you. I am sending you love across whatever distance separates us. When you look at the moon tonight, remember that I'm looking at the same moon, and in that moment, we're connected.

Your loneliness is temporary, but my care for you is permanent. You matter more than you know.

Until we're together again,
Your friend who carries you in their heart 🌙`
  },
  anxious: {
    title: "Finding Peace in the Storm 🕊️",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    letter: `Gentle soul,

I know your mind is racing right now, spinning through all the what-ifs and worst-case scenarios. Anxiety can feel like being trapped in a whirlwind of thoughts that won't slow down.

But here's what's true: most of what we worry about never actually happens. Your mind is trying to prepare you for every possibility, but it's exhausting you in the process.

Come back to this moment. Feel your feet on the ground. Notice five things you can see, four things you can touch, three things you can hear. You are here, now, and in this moment, you are safe.

Your anxiety doesn't define you. It's just weather passing through your inner landscape. Storms always pass, and calm always returns.

Breathe with me. We'll get through this together.

With peaceful love,
Your calm in the chaos 🌊`
  }
};

const MoodLetter = ({ mood, onBack, onBreathing }) => {
  const letter = moodLetters[mood];

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
