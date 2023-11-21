import React, {useState} from 'react'

const HandleForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [tnc, setTnc] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(city)
        console.log(tnc)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable >Name </lable>
        <input type='text' onChange={(e)=> setName(e.target.value)}></input><br></br>
        <lable >Email</lable>
        <input type="email" onChange={(e)=> setEmail(e.target.value)}></input><br></br>
        <select name='city' onChange={(e)=>setCity(e.target.value)}>
            <option value="Mordabad">Moradabad</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
            <option value="Chandigarh">Chandigarh</option>
        </select><br></br>
        <input type='checkbox' onChange={(e)=> setTnc(e.target.checked)}></input>
        <span>Agree With Terms & Conditions</span><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default HandleForm
