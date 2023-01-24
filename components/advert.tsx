import Image from "next/image"

type Props = {
    src: any
}

export default function Advert({src}: Props) {
  return (
    <div className="w-full px-2 mt-7 mb-14 cursor-pointer">
          <Image
           src={src}
           alt="screenshot1"
           height={1200}
           width={1200}
          />
          </div>
  )
}