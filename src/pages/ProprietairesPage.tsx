import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Phone, 
  Mail, 
  Car,
  FileText,
  Edit,
  MoreVertical
} from "lucide-react";

const clients = [
  {
    id: 1,
    nom: "Martin Dubois",
    telephone: "06 12 34 56 78",
    email: "martin.dubois@email.com",
    adresse: "15 rue de la Paix, 75001 Paris",
    vehicules: 2,
    ordres: 5,
    dernierOR: "2024-01-15"
  },
  {
    id: 2,
    nom: "Sophie Laurent",
    telephone: "06 98 76 54 32",
    email: "sophie.laurent@email.com", 
    adresse: "23 avenue des Champs, 75008 Paris",
    vehicules: 1,
    ordres: 3,
    dernierOR: "2024-01-10"
  },
  {
    id: 3,
    nom: "Pierre Moreau",
    telephone: "06 55 44 33 22",
    email: "pierre.moreau@email.com",
    adresse: "8 boulevard Saint-Germain, 75005 Paris",
    vehicules: 1,
    ordres: 7,
    dernierOR: "2024-01-08"
  }
];

export function ProprietairesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Propriétaires</h2>
          <p className="text-muted-foreground">Gestion de la clientèle</p>
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Rechercher un client</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Nom, téléphone ou email..." className="pl-10" />
            </div>
            <Button variant="outline">Rechercher</Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <div className="grid gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold">{client.nom}</h3>
                    <Badge variant="outline">
                      {client.vehicules} véhicule{client.vehicules > 1 ? 's' : ''}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {client.telephone}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {client.email}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        {client.ordres} OR total
                      </div>
                      <div className="text-muted-foreground">
                        Dernier OR: {client.dernierOR}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mt-2">{client.adresse}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Car className="h-4 w-4 mr-2" />
                    Véhicules
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