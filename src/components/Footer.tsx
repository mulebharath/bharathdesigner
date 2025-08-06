import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> by a passionate designer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 All rights reserved
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-2 border-primary hover:bg-primary hover:text-white transition-smooth"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;