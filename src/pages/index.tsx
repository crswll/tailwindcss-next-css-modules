import type { NextPage } from 'next'
import { tw } from '../utils'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <pre className={tw('text-red-300')}>Testing</pre>
    </div>
  )
}

export default Home
