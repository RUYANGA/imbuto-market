import { AlertCircle, TrendingDown, Package, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Igihombo ku Musaruro",
    description: "Kugabanya igihombo gituruka ku musaruro wangirika ku masoko."
  },
  {
    icon: TrendingDown,
    title: "Isoko Ridahindagurika",
    description: "Gutuma abahinzi babona amafaranga ahamye kandi batarambirije ku isoko ryo ku iseta."
  },
  {
    icon: Package,
    title: "Guhaza Amasoko Akomeye",
    description: "Guhaza amasoko akomeye mu buryo buhoraho."
  },
  {
    icon: DollarSign,
    title: "Ubuhinzi Burengera Ibidukikije",
    description: "Gukoresha ubuhinzi bunoze, butangiza ibidukikije."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impinduka Dushaka Kuzana
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dufasha abahinzi n’abaguzi kubona inyungu mu bucuruzi bw’ibiribwa bitunganye, tugabanya igihombo, tunateza imbere ubuhinzi burambye.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-destructive/10 rounded-full">
                    <problem.icon className="h-8 w-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
