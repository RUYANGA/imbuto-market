import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Agri Fresh Harvest
            </h3>
            <p className="text-background/80 mb-4">
              Duhuza abaguzi n'abahinzi ku buryo bwizewe kandi bwihuse
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serivisi</h4>
            <ul className="space-y-2 text-background/80">
              <li>Imboga Nziza</li>
              <li>Imbuto Z'Ubwiza</li>
              <li>Gutunganya no Gupakira</li>
              <li>Serivisi zo Gutwarira</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Abakiriya</h4>
            <ul className="space-y-2 text-background/80">
              <li>Hoteli</li>
              <li>Resitora</li>
              <li>Amasoko Manini</li>
              <li>Ibigo Bitandukanye</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Duhamagare</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+250 722 777 165</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>agrifreshharvestrwandaltd@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 mb-4 md:mb-0">
            © 2024 Agri Fresh Harvest Rwanda Ltd. Uburenganzira bwose burabitswe.
          </p>
          
          <div className="flex gap-4">
            <a href="#" title="Facebook" aria-label="Facebook" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-all">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" title="Twitter" aria-label="Twitter" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-all">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-all">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
