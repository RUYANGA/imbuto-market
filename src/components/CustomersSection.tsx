import { Building2, UtensilsCrossed, ShoppingCart, School, Globe } from "lucide-react";

const customers = [
  {
    icon: Building2,
    title: "Hoteli",
    description: "Hoteli nini zikeneye imbuto n'imboga ku buryo buhoraho"
  },
  {
    icon: UtensilsCrossed,
    title: "Resitora",
    description: "Resitora zikenera umusaruro mwiza kandi ushya"
  },
  {
    icon: ShoppingCart,
    title: "Amasoko Manini",
    description: "Amasoko manini akeneye umusaruro uhagije"
  },
  {
    icon: School,
    title: "Ibigo Bitandukanye",
    description: "Amashuri, ibitaro n'ibindi bigo"
  },
  {
    icon: Globe,
    title: "Abohereza Hanze",
    description: "Abagura ibyogurishwa mu mahanga"
  }
];

const CustomersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Abakiriya <span className="text-primary">Bacu</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tukorana n'amasoko manini kandi akomeye mu Rwanda
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {customers.map((customer, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-primary/5 transition-all border border-border hover:border-primary/50 hover:shadow-lg"
            >
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                <customer.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {customer.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {customer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
