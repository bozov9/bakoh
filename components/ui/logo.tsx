import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image  src={'/logo.jpeg'} alt='logo' height={80} width={80}/>
    </Link>
  )
}
