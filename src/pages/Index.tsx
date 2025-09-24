import { Link } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 h-full">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Organize Your Life, One Task at a Time
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Welcome to your new To-Do application. Simple, elegant, and powerful. Get started now and bring clarity to your workflow.
        </p>
        <Link to="/todo">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg group">
            Go to My To-Do List
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0">
        <MadeWithApplaa />
      </div>
    </div>
  );
};

export default Index;