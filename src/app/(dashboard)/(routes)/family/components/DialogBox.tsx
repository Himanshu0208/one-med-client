import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export default function DialogBox() {

  const [show, setShow] = useState(false);
  const [member, setMember] = useState({
    name: "",
    user_id: "",
    relation: "",
  })

  async function handleSubmit() {
    // console.log(e.target.value);
    // const res = await axios.post("", {
    //   email: localStorage.getItem('email'),
    //   images: images
    // })
    console.log(member);
    console.log("submit")
    setShow(false);
  }

  return (
    <div>
      <Dialog open={show}>
        <DialogTrigger ><span className="font-semibold text-white bg-slate-900 py-2 px-4 rounded-lg" onClick={() => setShow(true)}>+ Add Family</span></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Family Member</DialogTitle>
              <DialogDescription>
                <form className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" onChange={(e) => setMember({...member, name:e.target.value})}/>
                  
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" onChange={(e) => setMember({...member, user_id:e.target.value})}/>
                  
                  <Label htmlFor="relation">Relation</Label>
                  <Input id="relation" type="text" onChange={(e) => setMember({...member, relation:e.target.value})}/>
                  
                  <Button type="button" onClick={handleSubmit} >Submit</Button>
                </form>
              </DialogDescription>
            </DialogHeader>
        </DialogContent>
      </Dialog>

      
    </div>
  )
}