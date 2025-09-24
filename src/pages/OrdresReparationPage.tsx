import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Car,
  User,
  Calendar,
  FileText,
  Edit,
  Eye,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const ordres = [
  {
    id: "OR-2024-001",
    vehicule: "Peugeot 308 - AB-123-CD",
    client: "Martin Dubois",
    motif: "Révision périodique + changement plaquettes",
    dateCreation: "2024-01-15",
    statut: "IN_PROGRESS",
    montantEstime: "320.00",
    mecanicien: "Jean Dupont",
    priorite: "NORMALE"
  },
  {
    id: "OR-2024-002", 
    vehicule: "Renault Clio - EF-456-GH",
    client: "Sophie Laurent",
    motif: "Problème de démarrage",
    dateCreation: "2024-01-14",
    statut: "READY",
    montantEstime: "180.50",
    mecanicien: "Marie Martin",
    priorite: "URGENTE"
  },
  {
    id: "OR-2024-003",
    vehicule: "Toyota Yaris - IJ-789-KL", 
    client: "Pierre Moreau",
    motif: "Vidange + contrôle technique",
    dateCreation: "2024-01-12",
    statut: "DRAFT",
    montantEstime: "95.00",
    mecanicien: "Non assigné",
    priorite: "NORMALE"
  }
];

const statusInfo = {
  DRAFT: { 
    label: "Brouillon", 
    variant: "secondary" as const, 
    icon: FileText 
  },
  IN_PROGRESS: { 
    label: "En cours", 
    variant: "default" as const, 
    icon: Clock 
  },
  READY: { 
    label: "Prêt", 
    variant: "default" as const, 
    icon: CheckCircle 
  },
  DELIVERED: { 
    label: "Livré", 
    variant: "outline" as const, 
    icon: CheckCircle 
  }
};

const prioriteColors = {
  NORMALE: "outline",
  URGENTE: "destructive",
  CRITIQUE: "destructive"
} as const;

export function OrdresReparationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Ordres de réparation</h2>
          <p className="text-muted-foreground">Gestion des interventions atelier</p>
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvel OR
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Brouillons</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">En cours</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">Prêts</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              <div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-muted-foreground">Urgents</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Rechercher un OR</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Numéro OR, véhicule, client..." className="pl-10" />
            </div>
            <Button variant="outline">Rechercher</Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="grid gap-4">
        {ordres.map((ordre) => {
          const StatusIcon = statusInfo[ordre.statut as keyof typeof statusInfo].icon;
          
          return (
            <Card key={ordre.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold">{ordre.id}</h3>
                      <Badge variant={statusInfo[ordre.statut as keyof typeof statusInfo].variant}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {statusInfo[ordre.statut as keyof typeof statusInfo].label}
                      </Badge>
                      <Badge variant={prioriteColors[ordre.priorite as keyof typeof prioriteColors]}>
                        {ordre.priorite}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Car className="h-4 w-4" />
                          {ordre.vehicule}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="h-4 w-4" />
                          {ordre.client}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Créé le {ordre.dateCreation}
                        </div>
                        <div className="text-muted-foreground">
                          Mécanicien: {ordre.mecanicien}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mt-2">{ordre.motif}</p>
                    <div className="mt-3 text-lg font-semibold">
                      Estimé: {ordre.montantEstime} €
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}