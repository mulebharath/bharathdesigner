import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import designLogos from "@/assets/design-logos.jpg";
import designPrint from "@/assets/design-print.jpg";
import designSocial from "@/assets/design-social.jpg";
import { Plus, FileText, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

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

const Work = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const work = designWorks.find((w) => w.slug === slug);

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!slug) return;
    setLoading(true);
    setError("");
    setImageLoadErrors(new Set());
    setLoadingImages(new Set());
    
    fetch(`${import.meta.env.BASE_URL}${slug}/images.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No manifest found");
        return res.json();
      })
      .then((data) => {
        setImages(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load images manifest:", err);
        setImages([]);
        setLoading(false);
        setError("No works added yet. Add your work images to the public/" + slug + " folder and update images.json.");
      });
  }, [slug]);

  const handleImageError = (imgSrc: string) => {
    setImageLoadErrors(prev => new Set(prev).add(imgSrc));
  };

  const handleImageLoad = (imgSrc: string) => {
    setImageLoadErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imgSrc);
      return newSet;
    });
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imgSrc);
      return newSet;
    });
  };

  const handleImageStartLoad = (imgSrc: string) => {
    setLoadingImages(prev => new Set(prev).add(imgSrc));
  };

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Work Not Found</h2>
          <p className="text-muted-foreground">The requested work does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-card p-8 text-center">
          <Badge variant="secondary" className="text-xs mb-4 bg-white/90 text-foreground px-3 py-1 font-semibold tracking-wide uppercase">
            {work.category}
          </Badge>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 mb-6 mx-auto"></div>
          <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{work.description}</p>
          
          {/* Gallery Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-6">Your Works</h2>
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="w-full h-32 bg-muted rounded-lg animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center">
                <div className="text-muted-foreground mb-4">{error}</div>
                <button
                  onClick={() => {
                    setLoading(true);
                    setError("");
                    fetch(`${import.meta.env.BASE_URL}${slug}/images.json`)
                      .then((res) => {
                        if (!res.ok) throw new Error("No manifest found");
                        return res.json();
                      })
                      .then((data) => {
                        setImages(Array.isArray(data) ? data : []);
                        setLoading(false);
                      })
                      .catch((err) => {
                        console.error("Failed to load images manifest:", err);
                        setImages([]);
                        setLoading(false);
                        setError("No works added yet. Add your work images to the public/" + slug + " folder and update images.json.");
                      });
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Retry Loading
                </button>
              </div>
            ) : images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {images.map((img, idx) => {
                  const isPDF = img.toLowerCase().endsWith('.pdf');
                  const fileUrl = `${import.meta.env.BASE_URL}${slug}/${img}`;
                  
                  return (
                    <div
                      key={idx}
                      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white border"
                      onClick={() => {
                        if (isPDF) {
                          window.open(fileUrl, '_blank');
                        } else {
                          setModalImg(fileUrl);
                        }
                      }}
                    >
                      {isPDF ? (
                        <div className="w-full h-32 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                          <FileText className="h-12 w-12 text-red-500" />
                        </div>
                      ) : imageLoadErrors.has(fileUrl) ? (
                        <div className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-gray-400 text-xs mb-1">Image not found</div>
                            <div className="text-gray-300 text-xs">{img}</div>
                          </div>
                        </div>
                      ) : loadingImages.has(fileUrl) ? (
                        <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                        </div>
                      ) : (
                        <img
                          src={fileUrl}
                          alt={`Work example ${idx+1}`}
                          className="w-full h-32 object-cover transition-transform duration-200 group-hover:scale-105 opacity-0 animate-fade-in"
                          style={{ animationDelay: `${idx * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}
                          onError={() => handleImageError(fileUrl)}
                          onLoad={() => handleImageLoad(fileUrl)}
                          onLoadStart={() => handleImageStartLoad(fileUrl)}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2 truncate">
                        {img}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-muted-foreground">No works added yet. Add your work images to the <code>public/{slug}</code> folder and update images.json.</div>
            )}
          </div>
        </div>
        
        {/* Modal for image preview */}
        {modalImg && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Preview" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white" />
            <button className="absolute top-8 right-8 text-white text-3xl font-bold" onClick={() => setModalImg(null)}>&times;</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work; 