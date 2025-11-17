import { CheckCircle } from "lucide-react";

const solutions = [
  "Tujya ku masoko makuru — supermarkets, hotels, restaurants, institutions — tukabona ibyo bakeneye.",
  "Tugashaka umusaruro uhwanye n'iryari isoko rikeneye, tugawuteranya kuri farmers groups.",
  "Dutunganya (sorting & grading) imboga n'imbuto, tukabipakira neza bijyanye n'amabwiriza y'ubuziranenge.",
  "Tukabigeza ku isoko ku gihe (same-day or next-day delivery).",
  "Tugabanya igihombo n'imyanda iboneka mu masoko."
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Igisubizo <span className="text-primary">Cyacu</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Duhuje ikoranabuhanga n'ubumenyi bw'ubuhinzi kugira ngo tuzane ibisubizo 
              byuzuye ku bibazo byo mu masoko y'ubuhinzi mu Rwanda.
            </p>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-all">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-6 sm:p-8 rounded-3xl">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6">
                  Impinduka Zitezwe
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">80%</div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      Kugabanya igihombo cy'umusaruro
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">95%</div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      Kugereza ku gihe
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">100+</div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      Abahinzi bahuye natwe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
