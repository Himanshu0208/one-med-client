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

export default function DialogBox({
  trigger,
  title,
} : {
  trigger: string,
  title: string,
}) {

  const [record, setRecord] = useState({
    images: "",
    issue: "",
    comment: "",
  });
  const [showAppointment, setShowAppointment] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [appointment, setAppointment] = useState({
    name: "",
    dateOfAppointment: "",
  })
  async function handleSubmitRecord() {
    // console.log(e.target.value);
    // const res = await axios.post("", {
    //   email: localStorage.getItem('email'),
    //   images: images
    // })
    console.log(images);
    console.log("submit")
    setShowAppointment(true);
    setShowRecord(false);
  }

  async function handleSubmitAppointment() {
    console.log(appointment);
    console.log("submit")
    setShowAppointment(false);
    setShowRecord(false);
  }

  async function handleSkip() {
    console.log(appointment);
    console.log("skip")
    setShowAppointment(false);
    setShowRecord(false);
  }

  return (
    <div>
      <Dialog open={showRecord}>
        <DialogTrigger ><span className="font-semibold text-white bg-slate-900 py-2 px-4 rounded-lg" onClick={() => setShowRecord(true)}>{trigger}</span></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                <form className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" onChange={(e) => setRecord({ ...record, images: e.target.value})} multiple required/>

                  <Label htmlFor="issue">What  was the issue</Label>
                  <Input id="issue" type="text" onChange={(e) => setRecord({ ...record, issue: e.target.value})} multiple required/>

                  <Label htmlFor="comment">Comments (if Any)</Label>
                  <Input id="comment" type="text-area" onChange={(e) => setRecord({ ...record, comment: e.target.value})} multiple required/>

                  <Button type="button" onClick={handleSubmitRecord} >Submit</Button>
                </form >
              </DialogDescription>
            </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={showAppointment}>
        <DialogTrigger>
          {
            showAppointment ? <span className="font-semibold text-white bg-slate-900 py-2 px-4 rounded-lg">{trigger}</span> : ""
          }
        </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Appointment Details</DialogTitle>
              <DialogDescription>
                <form className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Doctor Name</Label>
                  <Input id="name" type="text" onChange={(e) => setAppointment({...appointment, name: e.target.value})} />

                  <Label htmlFor="dateOfAppointment">Doctor Name</Label>
                  <Input id="dateOfAppointment" type="date" onChange={(e) => setAppointment({...appointment, dateOfAppointment: e.target.value})} multiple/>
                  <Button type="button" onClick={handleSubmitAppointment} >Submit</Button>
                  <Button type="button" variant="outline" onClick={handleSkip} >Skip</Button>
                </form >
              </DialogDescription>
            </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}