'use client'

import { useActionState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input";;
import { Button } from "@/components/ui/button";
import { subscribeUser } from '@/app/api/subscribe';

type SubscribeState = { error: string; success?: undefined } | { success: string; error?: undefined } | null;

const subscribeUserAction = async (state: SubscribeState, formData: FormData): Promise<SubscribeState> => {
  try {
    const response = await subscribeUser(formData);
    return response;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

import { Mail, Zap, Bell, Gift } from 'lucide-react';
import { toast } from 'sonner';

export default function SubscribeSection() {
  const [state, formAction, pending] = useActionState(subscribeUserAction, null);

  return (
    <div className="w-full px-4 py-24 lg:px-8 border rounded-lg">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Stay Ahead of the Curve
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Join our community of explorers and get exclusive updates delivered straight to your inbox.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Zap, text: "Be the first to know about new projects" },
                { icon: Bell, text: "Receive timely company insights" },
                { icon: Gift, text: "Get access to exclusive offers and events" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="h-6 w-6 text-primary mr-2" />
                  <span className="text-lg text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Card className="w-full p-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="abc@example.com"
                        required
                        className="w-full pl-10 py-6 text-lg"
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" size="lg" disabled={pending}>
                    {pending ? 'Subscribing...' : 'Subscribe Now'}
                  </Button>
                  {state?.error && (
                    toast.error(state.error)
                  )}
                  {state?.success && (
                    toast.success(state.success)
                  )}
                </form>
                <p className="text-sm text-center text-muted-foreground mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

