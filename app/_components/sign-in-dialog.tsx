import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleGoogleWithClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça o login na plataforma!</DialogTitle>
        <DialogDescription>
          Conecte-se usando uma conta Google!
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1"
        onClick={handleGoogleWithClick}
      >
        <Image src="/google.svg" width={18} height={18} alt="google" />
        <p className="font-bold">Google</p>
      </Button>
    </>
  )
}

export default SignInDialog
