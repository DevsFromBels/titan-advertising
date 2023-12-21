import * as React from "react"

import { cn } from "@/shared/components/ui/utils"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type  UserFormInterface = UserAuthFormProps & { textButtonSubmit: string };

export function UserAuthForm({ className, textButtonSubmit, ...props }: UserFormInterface) {

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form >
        <div className="grid gap-4">
          <div className="grid gap-4">
            <Label>
              Nickname
            </Label>
            <Input
              id="nickname"
              placeholder="Your Name"
              type="text"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <Label>
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="Your Email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <Label>
              Password
            </Label>
            <Input
              id="password"
              placeholder="Your Password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button>
            {textButtonSubmit}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        Google
      </Button>
    </div>
  )
}