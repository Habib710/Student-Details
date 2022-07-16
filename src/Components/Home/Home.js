import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Home.css'

const Home = () => {
  const [Students, setStudent] = useState([])

  useEffect(() => {
    fetch('https://student71.herokuapp.com/students')
      .then((res) => res.json())
      .then((data) => setStudent(data))
  }, [])

  const hendeleDelet = (id) => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `
        https://student71.herokuapp.com/students/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const remain = Students.filter((item) => item._id !== id)
            setStudent(remain)
          })

        Swal.fire('Deleted!', 'Ihis Item has been deleted.', 'success')
      }
    })
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="p-5">Students Details</h1>
        <h3 className="">Total Students : {Students.length}</h3>
        <Link to="/add">
          <button className="btn-grad m-3">Add Student</button>
        </Link>
      </div>

      <div className="container">
        {Students.map((student) => (
          <div className="main-div-css m-3">
            <div className="img-div">
              <img src={student.pic} alt="img" />
            </div>
            <div>
              <h4> Name: {student.name}</h4>
              <h5>Roll : {student.roll} </h5>
              <h6>Class : {student.clas} </h6>
              <h6>Result :{student.result}</h6>
              <h6>Activty : {student.type}</h6>
            </div>
            <div className="">
              <Link to={'/update/' + student._id}>
              
                <button className="btn-update">Update</button>
              </Link>

              <button
                onClick={() => hendeleDelet(student._id)}
                className="btn-delete"
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
