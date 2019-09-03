function Home() {
  return (
    <div>
      <p>Home Page</p>
      <style jsx>{
        `
        p {
            color: white;
            font-size: 50px;
            text-align: center;
          }
          a {
            color: blue;
            font-size: 60px;
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
