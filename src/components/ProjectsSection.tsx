import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import designLogos from "@/assets/design-logos.jpg";
import designPrint from "@/assets/design-print.jpg";
import designSocial from "@/assets/design-social.jpg";

const ProjectsSection = () => {
  const featuredProject = {
    title: "The Compendium Web Page",
    description: "A comprehensive digital library platform designed to organize and showcase various collections. Features intuitive navigation, advanced search functionality, and responsive design for optimal user experience across all devices.",
    tags: ["Web Design", "UI/UX", "Responsive Design", "User Research"],
    type: "Web Platform",
    year: "2025"
  };

  const designWorks = [
    {
      title: "Logo Design Collection",
      description: "Brand identity designs for various clients",
      category: "Branding",
      slug: "logo-design-collection",
      image: designLogos
    },
    {
      title: "Print Materials",
      description: "Business cards, flyers, and marketing collateral",
      category: "Print Design",
      slug: "print-materials",
      image: designPrint
    },
    {
      title: "Social Media Graphics",
      description: "Engaging social media templates and posts",
      category: "Social Media",
      slug: "social-media-graphics",
      image: designSocial
    }
  ];

  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my design process, problem-solving approach, 
            and the impact of thoughtful design on user experience and business outcomes.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group max-w-2xl mx-auto">
            {/* Content only, no image */}
            <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Badge variant="outline" className="text-xs px-3 py-1 bg-primary/10 border-primary/40 text-primary font-semibold tracking-wide uppercase">
                  {featuredProject.type}
                </Badge>
                <Badge variant="secondary" className="text-xs px-3 py-1 bg-gradient-to-r from-primary/80 to-secondary/80 text-white font-semibold tracking-wide uppercase shadow">
                  {featuredProject.year}
                </Badge>
              </div>
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 mb-6"></div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredProject.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {featuredProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm hover:bg-primary hover:text-white transition-smooth">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <Button 
                  className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open("https://thecompendium.vercel.app/", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-primary hover:bg-primary hover:text-white transition-smooth"
                  onClick={() => window.open("https://github.com/mulebharath/Thecompendium", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Case Study
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Design Works Grid */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Design Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designWorks.map((work, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group cursor-pointer flex flex-col items-center text-center py-8 hover:scale-[1.03] border-2 border-transparent hover:border-primary/40"
                onClick={() => window.open(`/work/${work.slug}`, '_blank')}
              >
                <img src={work.image} alt={work.title} className="w-full h-40 object-cover mb-4 rounded-t-lg" />
                <Badge variant="secondary" className="text-xs mb-4 bg-white/90 text-foreground px-3 py-1 font-semibold tracking-wide uppercase">
                  {work.category}
                </Badge>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 mb-6"></div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {work.title}
                </h4>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {work.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;