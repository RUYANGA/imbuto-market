import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Murakoze! Tuzabahamagara vuba.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Form */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tangira Gukorana Natwe
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Uzuza ifishi y’iyandikisha cyangwa utwoherereze ubutumwa kuri WhatsApp/telephone. Tuguhamagarira kugenzura amakuru yawe no kukumenyesha ibisabwa. Turagutangira ubufatanye bwihuse kandi bwizewe.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Amazina yawe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 text-base sm:text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Imeli yawe"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 text-base sm:text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Nimero ya telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-base sm:text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ubutumwa bwawe..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[100px] sm:min-h-[120px] text-base sm:text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-base sm:text-lg py-3">
                <Send className="mr-2 h-5 w-5" />
                Ohereza Ubutumwa
              </Button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 w-full max-w-lg mx-auto lg:mx-0">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Duhamagare
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Turi hano kugirango tuguhe ubufasha
                    </p>
                    <a href="tel:+250722777165" className="text-primary font-medium hover:underline">
                      +250 722 777 165
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Imeli
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Twoherereze imeli, tuzagusubiza vuba
                    </p>
                    <a href="mailto:agrifreshharvestrwandaltd@gmail.com" className="text-accent font-medium hover:underline">
                      agrifreshharvestrwandaltd@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Tuvugishe kuri WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/+250789988184" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary font-medium hover:underline"
                    >
                      Ohereza ubutumwa
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
