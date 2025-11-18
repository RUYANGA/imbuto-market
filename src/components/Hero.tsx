import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-produce.jpg";

const Hero = () => {
  return (
  <section className="relative min-h-[60vh] md:min-h-screen flex items-center bg-gradient-to-b from-light-green to-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                🌿 MENYA BYINSHI – AGRI FRESH HARVEST RWANDA LTD
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Agri Fresh Harvest Rwanda Ltd
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Agri Fresh Harvest Rwanda Ltd ni kompanyi nyarwanda yihaye intego yo kuvugurura uburyo imboga n’imbuto zigurishwa, zikusanywa kandi zigezwa ku isoko. Dukorera mu buryo buhuza abahinzi n’amasoko akomeye, tukabafasha kubona umusaruro ugezweho, ufite ubuziranenge kandi uboneka ku gihe.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Dushingiye ku ikoranabuhanga, dukusanya ibyo isoko rikeneye, tukabashakira umusaruro ubihuye, tukawutunganya (sorting & packaging), hanyuma tukawugeza ku masoko manini n’abaguzi b’ingeri zitandukanye.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-md hover:shadow-lg transition-all">
                Tangira Gukorana Natwe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* Use React Router navigation for SPA routing */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg"
                asChild
              >
                <a href="/menya-byinshi">Menya Byinshi</a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage}
              alt="Fresh Rwandan produce"
              className="relative rounded-3xl shadow-2xl w-full h-auto max-h-[420px] sm:max-h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
