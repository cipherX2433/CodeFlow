import { auth, signOut } from "@/auth";


const Home = async () => {
  const session = await auth();

  console.log(session);

  return(
  <>
    <h1>Welcome to NextJS</h1>  
  </>
)
};

export default Home;
