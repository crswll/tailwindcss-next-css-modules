import type { NextPage } from 'next'
import Link from 'next/link'
import { tw } from '../utils'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <pre className={tw('text-cyan-500 font-semibold')}>about</pre>
    </div>
  )
}

export default Home
