import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mx-5">
      <div className="container py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Briefcase className="h-6 w-6" />
              <span className="font-bold">PayTask</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando profissionais qualificados com clientes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Procure Categorias
                </Link>
              </li>
              <li>
                <Link
                  href="/professionals"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Encontre Profissionais
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Torne-se um Profissional
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PayTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
