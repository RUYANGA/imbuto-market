import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "Ahabanza", id: "hero" },
    { label: "Ikibazo", id: "problem" },
    { label: "Igisubizo", id: "solution" },
    { label: "Uko Bikora", id: "workflow" },
    { label: "Ibicuruzwa", id: "products" },
    { label: "Abakiriya", id: "customers" },
    { label: "Impinduka", id: "impact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="p-2 bg-primary rounded-lg">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Agri Fresh</h1>
              <p className="text-xs text-muted-foreground">Harvest Rwanda</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+250788000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+250 789 988 184
</span>
            </a>
            <Button className="shadow-md">
              Tuvugishe
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary rounded-lg">
                    <Leaf className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Agri Fresh</h2>
                    <p className="text-xs text-muted-foreground">Harvest Rwanda</p>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Button
                      key={link.id}
                      variant="ghost"
                      onClick={() => scrollToSection(link.id)}
                      className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                    >
                      {link.label}
                    </Button>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <a 
                    href="tel:+250788000000" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">+250 788 000 000</span>
                  </a>
                  <Button className="w-full">
                    Tuvugishe
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
