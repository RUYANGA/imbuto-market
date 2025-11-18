import { CheckCircle } from "lucide-react";

const solutions = [
  "Dukora ubushakashatsi ku masoko (market demand).",
  "Dukorana n’abahinzi bo mu byiciro bitandukanye kugira ngo tubabonere isoko.",
  "Dukusanya umusaruro uhuye n’ibyo isoko rikeneye.",
  "Dutondeka, dutandukanya tukabipakira mu buryo bunogeye isoko.",
  "Tuzigeza ku masoko, supermarkets, hoteli, resitora n’ibindi bigo bikenera imboga n’imbuto mu buryo buhamye."
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Icyo Dukora
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Dukora ibikorwa byose by’ingenzi mu guhuza abahinzi n’isoko: ubushakashatsi, gukusanya umusaruro, gutunganya no kugeza ku masoko akomeye.
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
                  Impamvu Dutandukanye
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold">✔️</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Turabanza kumenya ibyo isoko rikeneye mbere yo gushaka umusaruro.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold">✔️</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Dufasha abahinzi kubona isoko ridahindagurika kandi rihoraho.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold">✔️</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Twita ku bwiza bw’umusaruro (quality control) mbere yo kuwushyikiriza abaguzi.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold">✔️</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Dutanga serivisi za same-day delivery mu gihe gikenewemo.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold">✔️</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Dukorana mu mucyo, twubaka icyizere hagati y’abahinzi n’abaguzi.</div>
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
