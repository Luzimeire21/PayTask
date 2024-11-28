import { ServicoForm } from "@/components/forms/ServicoForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewServicoPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo Serviço</CardTitle>
      </CardHeader>
      <CardContent>
        <ServicoForm />
      </CardContent>
    </Card>
  );
}
