import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardList, 
  FileText, 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Car,
  Plus
} from "lucide-react";

const metrics = [
  {
    title: "OR en cours",
    value: "12",
    description: "Ordres de réparation actifs",
    icon: ClipboardList,
    trend: "+2 depuis hier",
    color: "primary"
  },
  {
    title: "Devis en brouillon",
    value: "5",
    description: "En attente de validation",
    icon: FileText,
    trend: "3 urgents",
    color: "warning"
  },
  {
    title: "Stock faible",
    value: "8",
    description: "Articles sous le seuil",
    icon: Package,
    trend: "Alerte",
    color: "destructive"
  },
  {
    title: "CA du mois",
    value: "24 580 €",
    description: "Janvier 2024",
    icon: TrendingUp,
    trend: "+15.3%",
    color: "success"
  }
];

const recentOrders = [
  { id: "OR-2024-001", vehicle: "Peugeot 308 - AB-123-CD", status: "IN_PROGRESS", client: "Martin Dubois" },
  { id: "OR-2024-002", vehicle: "Renault Clio - EF-456-GH", status: "READY", client: "Sophie Laurent" },
  { id: "OR-2024-003", vehicle: "Toyota Yaris - IJ-789-KL", status: "DRAFT", client: "Pierre Moreau" },
];

const lowStockItems = [
  { name: "Plaquettes de frein avant", stock: 2, min: 5 },
  { name: "Filtre à huile standard", stock: 1, min: 10 },
  { name: "Ampoule H7", stock: 3, min: 8 },
];

const statusColors = {
  DRAFT: "secondary",
  IN_PROGRESS: "default", 
  READY: "default",
  DELIVERED: "outline"
} as const;

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Tableau de bord</h2>
          <p className="text-muted-foreground">Vue d'ensemble de votre garage</p>
        </div>
        
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nouveau client
          </Button>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Nouvel OR
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
              <Badge 
                variant={metric.color === "success" ? "default" : metric.color as any}
                className="mt-2 text-xs"
              >
                {metric.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Ordres de réparation récents
            </CardTitle>
            <CardDescription>Dernières activités de l'atelier</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-muted-foreground">{order.vehicle}</div>
                    <div className="text-sm text-muted-foreground">{order.client}</div>
                  </div>
                  <Badge variant={statusColors[order.status as keyof typeof statusColors]}>
                    {order.status.replace('_', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Voir tous les OR
            </Button>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Alertes stock
            </CardTitle>
            <CardDescription>Articles nécessitant un réapprovisionnement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Stock: {item.stock} / Min: {item.min}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-warning border-warning">
                    {item.stock} restant{item.stock > 1 ? 's' : ''}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Gérer le stock
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}