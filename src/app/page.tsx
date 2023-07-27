
export default async function Home() {

  
 const res = await fetch('https://api.github.com/repos/octocat/hello-world/issues',{
    
  })
if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
        
console.log( "Res :",  res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl"> Fetch data </h1>
    </main>
  )
}
