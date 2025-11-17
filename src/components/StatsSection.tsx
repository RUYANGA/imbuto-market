import { Users, Package, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Abahinzi",
    description: "Dukorana nabo"
  },
  {
    icon: Package,
    value: "10K+",
    label: "Tonnes",
    description: "Umusaruro buri mwaka"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Kugereza",
    description: "Ku gihe"
  },
  {
    icon: Award,
    value: "50+",
    label: "Amasoko",
    description: "Dukoraniraho"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-leaf-green to-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center text-primary-foreground"
            >
              <div className="mb-4 p-4 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm opacity-90">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
