import marketIcon from "@/assets/market-icon.jpg";
import farmersIcon from "@/assets/farmers-icon.jpg";
import packagingIcon from "@/assets/packaging-icon.jpg";
import deliveryIcon from "@/assets/delivery-icon.jpg";
import { Card, CardContent } from "@/components/ui/card";

const workflow = [
  {
    step: "1",
    title: "Gukusanya Ibikenewe n'Isoko",
    description: "Twohereza abakozi bacu kumasoko manini (hoteli, resitora, supermarkets). Turakira urutonde rw'ibyo bakeneye buri cyumweru.",
    image: marketIcon
  },
  {
    step: "2",
    title: "Kujya ku Bahinzi",
    description: "Tugana abahinzi bacu (amakoperative n'abahinzi ku giti cyabo). Turakusanya umusaruro uhuye n'ibyo isoko rikeneye. Turapima ubuziranenge.",
    image: farmersIcon
  },
  {
    step: "3",
    title: "Gutunganya no Gupakira",
    description: "Dutondeka, dutandukanya umusaruro twagize. Dushiramo ipaketi yacu itangira kubimara.",
    image: packagingIcon
  },
  {
    step: "4",
    title: "Gutwarira Amasoko Manini",
    description: "Turawutwara ku masoko makuru aho twabonye ibikenewe, tukawushyikiriza ku gihe. Umusaruro uzi neza aho ujya.",
    image: deliveryIcon
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Uko <span className="text-primary">Bikora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inzira yacu yizewe yo kuva ku isoko rigeze ku muhinzi hanyuma bigasubira ku isoko 
            ari umusaruro utunganye
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflow.map((item, index) => (
              <Card key={index} className="bg-card hover:shadow-xl transition-all border-2 hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xl">
                      {item.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
