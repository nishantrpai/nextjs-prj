import Nav from '../components/nav'

function Home() {
  return (
    <div>
      <Nav/>
      <p>Welcome to Next.js</p>
      <a href='/home'>home page</a>
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

export default Home
