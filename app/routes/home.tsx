import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIRA - by sadh" },
    { name: "description", content: "smart anayser for new job " },
  ];
}

export default function Home() {
  return <main className="bg-[url('public/images/bg-main.svg')] bg-cover">
    
    <Navbar/>
    <section className = "main-section">
      <div className="pageHeading">
        <h1>Track you Applications and Resume Ratings</h1>
        <br/>
        <h2>Review and Revise  your submissions 
          in one place  with AI powered feedback.</h2>
      </div>

    </section>
  
  {/* {[
    
  ]} */}


  </main>

}
