import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      {/* Enhanced background gradient with subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/30 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      {/* Animated background elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/2 translate-x-1/2 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        {/* Text content */}
        <div className="text-center animate-slide-up max-w-2xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-lg">
            Mule Bharath
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-lg">
            Creative Designer
          </h2>
          <p className="text-xl mb-8 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Passionate about transforming ideas into visually stunning and effective digital solutions. I blend creativity with strategy to deliver impactful branding, UI/UX, and web experiences that help brands stand out and connect with their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;