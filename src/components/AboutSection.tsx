import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Palette, Lightbulb, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "UI/UX Design", "Figma", "Prototyping",
    "User Research", "Wireframing", "Brand Identity", "Design Systems",
    "Responsive Design", "Accessibility", "HTML/CSS", "React"
  ];

  const values = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Creative Vision",
      description: "Transforming ideas into compelling visual narratives that resonate with users."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Staying ahead of design trends while creating timeless, functional experiences."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "User-Centered",
      description: "Every design decision is driven by user needs and validated through research."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "Focusing on designs that not only look great but also achieve business goals."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate designer with 3+ years of experience creating meaningful digital experiences. 
            I believe great design happens at the intersection of user needs, business goals, and creative innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my design journey with a curiosity for how things work and a passion for making them better. 
              Over the past 3 years, I've had the privilege of working with diverse clients, from innovative startups 
              to established brands, helping them tell their stories through thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines analytical thinking with creative problem-solving, ensuring every design decision 
              is backed by research and user insights. I'm constantly learning and evolving my craft to stay at 
              the forefront of design innovation.
            </p>
            
            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Skills & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 hover:bg-primary hover:text-white transition-smooth">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
            {values.map((value, index) => (
              <Card key={index} className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;