import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Github Profile</h1>
      <h2>Generate your Github Profile</h2>
      <form>
        <input type="text" placeholder='Github Username'></input>
        <Link href='resume'><button type='submit'>Generate</button></Link>
      </form>
    </div>
  )
}
