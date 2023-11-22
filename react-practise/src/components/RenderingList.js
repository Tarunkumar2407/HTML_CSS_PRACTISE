import React from 'react'

const RenderingList = () => {
    const students = [
        {name: "Tarun", email: "tarun@gmail.com", address: "Moradabad"},
        {name: "Ankur", email: "ankur@gmail.com", address: "Hapur"},
        {name: "Sumer", email: "sumer@gmail.com", address: "Delhi"},
        {name: "Puskar", email: "pushkar@gmail.com", address: "Gurgaon"}
    ]
  return (
    <div>
    <table border= "1">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        {
        students.map((student) => {
            return (
                <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                </tr>
            )
        })
      }
    </table>
     
    </div>
  )
}

export default RenderingList
