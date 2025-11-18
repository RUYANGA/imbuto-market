import marketIcon from "@/assets/market-icon.jpg";
import farmersIcon from "@/assets/farmers-icon.jpg";
import packagingIcon from "@/assets/packaging-icon.jpg";
import deliveryIcon from "@/assets/delivery-icon.jpg";
import { Card, CardContent } from "@/components/ui/card";

const workflow = [
  {
    step: "1",
    title: "Iyandikishe (Registration)",
    description: "Uzuza ifishi y’iyandikisha kuri website, cyangwa utwoherereze ubutumwa kuri WhatsApp/phone. Tuguhamagarira kugenzura amakuru yawe no kukumenyesha ibisabwa.",
    image: marketIcon
  },
  {
    step: "2",
    title: "Tumenyeshe ibyo ukora (Profile Setup)",
    description: "Niba uri umuhinzi → utubwira ibyo uhinga, ingano n’igihe umusaruro uboneka. Niba uri umuguzi / isoko → utubwira ibyo ukeneye, ingano, n’ubwinshi bwa buri cyumweru.",
    image: farmersIcon
  },
  {
    step: "3",
    title: "Kugenzura Ubuziranenge (Quality Check)",
    description: "Abakozi bacu basura ahantu umusaruro ukomoka, bareba ubuziranenge n’uburyo bwo gupakira, hanyuma tugushyira mu cyiciro cy’abafatanyabikorwa bemewe.",
    image: packagingIcon
  },
  {
    step: "4",
    title: "Gutangira ubufatanye (Activation)",
    description: "Turagushyira muri sistema yacu y’abatanga umusaruro cyangwa tugashyiraho serivisi yo kukugezaho ibicuruzwa ku gihe.",
    image: deliveryIcon
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uko Watangira Gukorana Natwe
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Agri Fresh Harvest Rwanda Ltd yakiriye neza buri wese wifuza gukorana natwe yaba ari umuhinzi, umucuruzi cyangwa isoko rikeneye ibiribwa bihoraho. Uburyo dutangiraho gukorana buroroshye kandi bwihuse.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflow.map((item, index) => (
              <Card key={index} className="bg-card hover:shadow-xl transition-all border-2 hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xl">
                      {item.step}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground">
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
