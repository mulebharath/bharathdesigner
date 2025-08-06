import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, MapPin, Linkedin, Instagram, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Drop me a line anytime",
      contact: "mulebharath16@gmail.com",
      action: "Send Email",
      href: "mailto:mulebharath16@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "Call me directly",
      contact: "+91 7780391081",
      action: "Call Now",
      href: "tel:+917780391081"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Meeting",
      description: "Book a consultation session",
      contact: "30-60 min sessions",
      action: "Book Meeting",
      href: "mailto:mulebharath16@gmail.com?subject=Meeting Request"
    }
  ];

  const socialLinks = [
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/m-bharath-059693319/",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      label: "Instagram", 
      href: "https://www.instagram.com/x_x.bharath/",
      color: "hover:bg-pink-600"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Email", 
      href: "mailto:mulebharath16@gmail.com",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and explore how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-8 text-center gradient-card shadow-card hover:shadow-elegant transition-smooth hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-smooth">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-muted-foreground mb-4">{method.description}</p>
              <p className="font-medium mb-6">{method.contact}</p>
              <Button 
                className="w-full gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300"
                onClick={() => window.open(method.href, '_blank')}
              >
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 gradient-card shadow-card">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
              action="https://formsubmit.co/mulebharath16@gmail.com" 
              method="POST"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="transition-smooth focus:shadow-card" 
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="transition-smooth focus:shadow-card" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry" 
                  className="transition-smooth focus:shadow-card" 
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="transition-smooth focus:shadow-card"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="p-8 gradient-card shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, creative collaborations, or just chatting about design. 
                Whether you have a specific project in mind or want to explore possibilities, let's start a conversation.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className={`border-2 border-primary hover:bg-primary hover:text-white transition-smooth ${social.color}`}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    {social.icon}
                    <span className="ml-2">{social.label}</span>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-8 gradient-card shadow-card">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="font-medium">Open for projects</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="font-medium">+91 7780391081</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium">mulebharath16@gmail.com</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;