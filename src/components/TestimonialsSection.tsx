import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jean Pierre Mugabo",
    role: "Umuyobozi wa Hoteli",
    company: "Kigali Serena Hotel",
    content: "Agri Fresh Harvest yatumye tubona imboga n'imbuto nziza ku gihe. Serivisi yabo ni nziza cyane kandi umusaruro uri ubuziranenge bwa mbere.",
    rating: 5,
    initials: "JM"
  },
  {
    name: "Marie Uwera",
    role: "Nyir'isitora",
    company: "Heaven Restaurant",
    content: "Nta kindi tukeneye! Batwoherereza ibintu byiza cyane kandi ku gihe. Abakiriya bacu bakunze cyane imboga n'imbuto bazana.",
    rating: 5,
    initials: "MU"
  },
  {
    name: "Patrick Nkusi",
    role: "Umuhinzi",
    company: "Koperative y'Abahinzi ba Musanze",
    content: "Kubera Agri Fresh, umusaruro wacu ufite isoko rihoraho. Ntacyo tunangirwa na kimwe. Ibiciro birahagije kandi bakawugura ku gihe.",
    rating: 5,
    initials: "PN"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ibyo <span className="text-primary">Abantu Babivugaho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reba ibyo abakiriya bacu n'abahinzi babivuga ku bijyanye na serivisi zacu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 bg-primary text-primary-foreground">
                    <AvatarFallback className="text-lg font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
