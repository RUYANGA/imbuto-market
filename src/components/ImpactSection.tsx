import { TrendingUp, Users, Recycle, Target, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impacts = [
  {
    icon: Target,
    title: "Isoko Rihoraho",
    description: "Gutuma abahinzi babona isoko rihoraho kandi ridahindagurika"
  },
  {
    icon: Recycle,
    title: "Kugabanya Igihombo",
    description: "Kugabanya igihombo gituruka ku musaruro wangirika"
  },
  {
    icon: TrendingUp,
    title: "Supply Ihamye",
    description: "Guhaza isoko rinini mu buryo buhoraho (consistent supply)"
  },
  {
    icon: Users,
    title: "Kurema Imirimo",
    description: "Kurema imirimo mu bijyanye no gutunda, gutunganya no gutanga ibicuruzwa"
  },
  {
    icon: Sprout,
    title: "Iterambere Rirambye",
    description: "Gukomeza ubuhinzi bufite agaciro n'iterambere rirambye"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Impinduka <span className="text-primary">Mukora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Umushinga wacu uzana impinduka nziza ku bahinzi, amasoko n'ubukungu bw'igihugu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <impact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-leaf-green p-8 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Model Ishobora Gupimwa
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ubushobozi bwo kugera ku masoko makuru (market-based sourcing model) 
            bushobora gupimwa mu gihugu hose kandi bugakomeza gutera imbere
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
