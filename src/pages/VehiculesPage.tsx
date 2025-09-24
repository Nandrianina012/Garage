import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Car,
  Fuel,
  Calendar,
  Settings,
  FileText,
  Edit,
  MoreVertical
} from "lucide-react";

const vehicules = [
  {
    id: 1,
    immatriculation: "AB-123-CD",
    marque: "Peugeot",
    modele: "308",
    annee: 2020,
    carburant: "Essence",
    transmission: "Manuelle",
    proprietaire: "Martin Dubois",
    kilometrage: 45000,
    dernierOR: "2024-01-15",
    statut: "EN_SERVICE"
  },
  {
    id: 2,
    immatriculation: "EF-456-GH", 
    marque: "Renault",
    modele: "Clio",
    annee: 2019,
    carburant: "Diesel",
    transmission: "Automatique",
    proprietaire: "Sophie Laurent",
    kilometrage: 62000,
    dernierOR: "2024-01-10",
    statut: "MAINTENANCE"
  },
  {
    id: 3,
    immatriculation: "IJ-789-KL",
    marque: "Toyota", 
    modele: "Yaris",
    annee: 2021,
    carburant: "Hybride",
    transmission: "Automatique",
    proprietaire: "Pierre Moreau",
    kilometrage: 28000,
    dernierOR: "2024-01-08", 
    statut: "EN_SERVICE"
  }
];

const statusColors = {
  EN_SERVICE: "default",
  MAINTENANCE: "destructive",
  ATTENTE_PIECES: "secondary"
} as const;

const statusLabels = {
  EN_SERVICE: "En service",
  MAINTENANCE: "En maintenance", 
  ATTENTE_PIECES: "Attente pièces"
} as const;

export function VehiculesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Véhicules</h2>
          <p className="text-muted-foreground">Parc automobile des clients</p>
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau véhicule
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Rechercher un véhicule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Immatriculation, marque, modèle..." className="pl-10" />
            </div>
            <Button variant="outline">Rechercher</Button>
          </div>
        </CardContent>
      </Card>

      {/* Vehicles List */}
      <div className="grid gap-4">
        {vehicules.map((vehicule) => (
          <Card key={vehicule.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold">
                      {vehicule.marque} {vehicule.modele}
                    </h3>
                    <Badge variant="outline" className="font-mono">
                      {vehicule.immatriculation}
                    </Badge>
                    <Badge variant={statusColors[vehicule.statut as keyof typeof statusColors]}>
                      {statusLabels[vehicule.statut as keyof typeof statusLabels]}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {vehicule.annee}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Fuel className="h-4 w-4" />
                        {vehicule.carburant}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Settings className="h-4 w-4" />
                        {vehicule.transmission}
                      </div>
                      <div className="text-muted-foreground">
                        {vehicule.kilometrage.toLocaleString()} km
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-muted-foreground">
                        Propriétaire: {vehicule.proprietaire}
                      </div>
                      <div className="text-muted-foreground">
                        Dernier OR: {vehicule.dernierOR}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Nouvel OR
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
        ))}
      </div>
    </div>
  );
}