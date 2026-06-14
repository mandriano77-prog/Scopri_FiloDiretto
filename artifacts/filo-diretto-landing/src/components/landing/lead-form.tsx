import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome è obbligatorio" }),
  email: z.string().email({ message: "Inserisci un'email valida" }),
  company: z.string().min(2, { message: "L'azienda è obbligatoria" }),
  companySize: z.enum(["1-49", "50-300", "301-800", "801-2500", "2500+"], { required_error: "Seleziona le dimensioni dell'azienda" }),
  role: z.string().optional(),
  phone: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const { toast } = useToast();
  const createLead = useCreateLead();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      companySize: undefined,
      role: "",
      phone: "",
      plan: "",
      message: "",
    },
  });

  useEffect(() => {
    const handleSelectPlan = (e: CustomEvent<string>) => {
      form.setValue("plan", e.detail);
    };
    window.addEventListener('select-plan', handleSelectPlan as EventListener);
    return () => window.removeEventListener('select-plan', handleSelectPlan as EventListener);
  }, [form]);

  function onSubmit(data: FormValues) {
    createLead.mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Richiesta inviata con successo",
          description: "Il nostro team ti contatterà al più presto.",
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Errore durante l'invio",
          description: error.data?.error || "Riprova più tardi.",
        });
      }
    });
  }

  if (createLead.isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif">Grazie!</h3>
        <p className="text-muted-foreground">La tua richiesta è stata ricevuta. Un nostro consulente ti contatterà brevemente.</p>
        <Button variant="outline" className="mt-8 rounded-full" onClick={() => createLead.reset()}>
          Invia un'altra richiesta
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome e cognome</FormLabel>
                <FormControl>
                  <Input placeholder="Mario Rossi" className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email di lavoro</FormLabel>
                <FormControl>
                  <Input placeholder="mario@azienda.it" className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Azienda</FormLabel>
                <FormControl>
                  <Input placeholder="Nome Azienda S.p.A." className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dimensioni Azienda</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background/50 border-border/50 focus:ring-primary h-12">
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-49">1 – 49 dipendenti</SelectItem>
                    <SelectItem value="50-300">50 – 300 dipendenti</SelectItem>
                    <SelectItem value="301-800">301 – 800 dipendenti</SelectItem>
                    <SelectItem value="801-2500">801 – 2.500 dipendenti</SelectItem>
                    <SelectItem value="2500+">Oltre 2.500 dipendenti</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ruolo <span className="text-muted-foreground text-xs">(Opzionale)</span></FormLabel>
                <FormControl>
                  <Input placeholder="HR Manager, CEO..." className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono <span className="text-muted-foreground text-xs">(Opzionale)</span></FormLabel>
                <FormControl>
                  <Input placeholder="+39 000 0000000" className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messaggio <span className="text-muted-foreground text-xs">(Opzionale)</span></FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Raccontaci brevemente le tue esigenze..." 
                  className="resize-none bg-background/50 border-border/50 focus-visible:ring-primary min-h-[100px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90" 
          disabled={createLead.isPending}
        >
          {createLead.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Invio in corso...
            </>
          ) : (
            "Richiedi una Demo"
          )}
        </Button>
      </form>
    </Form>
  );
}
