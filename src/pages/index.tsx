import { styled } from "@/styles"

const Button = styled('button',{
 backgroundColor: '$rocket',
 borderRadius: 8,
})

export default function Home() {
  return (
    <Button>Enviado</Button>
  )
}