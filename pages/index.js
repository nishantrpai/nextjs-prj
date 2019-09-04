import Nav from '../components/nav'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default () => {  
  const isAmp = useAmp()
  return (
    <div>
      <Nav/>
      <p>Welcome to Next.js</p>
      <a href={isAmp ? '/home?amp=1' : '/home'}>home page</a>
      <style jsx>{
        `
          p {
            color: white;
            font-size: 50px;
            text-align: center;
          }
          a {
            color: purple;
            font-size: 60px;
            text-decoration: none;
          }
        `
      }</style>
      <style global jsx>{
        `
          body {
            background: black;
          }
          `
      }
      </style>
    </div>
  )
}
