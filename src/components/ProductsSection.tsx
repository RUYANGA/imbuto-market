import { Leaf, Apple, Package, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: Leaf,
    title: "Imboga Nziza",
    description: "Imboga zifite ubuziranenge ziturutse kuri abahinzi bacu"
  },
  {
    icon: Apple,
    title: "Imbuto Z'Ubwiza",
    description: "Imbuto nziza kandi zumye zitunganijwe neza"
  },
  {
    icon: Package,
    title: "Gutunganya no Gupakira",
    description: "Ibicuruzwa byatunganijwe kandi byapakirwe neza"
  },
  {
    icon: TrendingUp,
    title: "Gukurikirana Umusaruro",
    description: "Gukurikirana umusaruro kuva ku muhinzi kugeza ku isoko"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ibicuruzwa & Serivisi
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Duhanga serivisi zuzuye zo gutunganya no kugeza umusaruro ku masoko
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:border-primary transition-all hover:shadow-lg bg-gradient-to-br from-card to-muted/30">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all">
                    <product.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
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

export default ProductsSection;
