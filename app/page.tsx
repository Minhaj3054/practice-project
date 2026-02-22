async function Home () {

  const response = await fetch('');
  if(!response.ok) throw new Error('Failed to fetch data');
  const albums = await response.json();

  return (
    <div>Welcome to Next.js</div>
  )
}

export default Home