import Button from '@mui/material/Button'; 

export default function Home() {
  return (
    <main >
    <h1>Landing Home Page</h1>
    <p>This is to check if automatic changes are picked up</p>
    <p>Material UI Integrated</p>
    <h1>Welcome to my Next.js + Material-UI app!</h1>
    <Button
      variant="contained"
      style={{ borderRadius: 50, padding: '8px 16px', backgroundColor: '#03CA9B', color: '#fff' }}  
    >
      Click me
    </Button>
  </main>
  )
}
