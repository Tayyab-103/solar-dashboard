"use client"
import { DemoTable } from "@/components/DemoTable"
import Navbar from "@/components/NavBar"

export default function Dashboard() {
  return (
    <>
      <div style={{width:"100%"}}>
        <Navbar />

        <div className="mt-5">
        <DemoTable/>
        </div>
      </div>
    </>

  )
}
