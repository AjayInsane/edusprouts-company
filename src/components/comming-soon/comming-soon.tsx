import { CalendarDays } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  pageName?: string
}

export default function ComingSoon({ pageName = "This page" }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <CalendarDays className="mx-auto h-24 w-24 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground">
          <span className='font-bold'>{pageName}</span> is under construction. We&#39;re working hard to bring you something amazing!
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

