import Image from "next/image"

type Props = {
    src: any
}

export default function WebFooter({src}: Props) {
  return (
    <div className="w-full cursor-pointer">
          <Image
           src={src}
           alt="screenshot1"
           height={1200}
           width={1200}
          />
          </div>
  )
}