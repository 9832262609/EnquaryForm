
// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [formData,setFormData]=useState({
//     uname:'',
//     uemail:'',
//     uphone:'',
//     umessage:'',
//     index:''
//   })

//   const [subData,setSubData]=useState([])

//   const Changer =(e)=>{
//     // setFormData(e.target.value)
//     // console.log(e.target.value)
//     setFormData({...formData,
//       [e.target.name]:[e.target.value]
//     },
//     console.log(formData)
//   )

//   }
//   const onhandle =(e)=>{
//     e.preventDefault()

//       setSubData([...subData,formData])
    
//     setFormData(
//       {
//         uname:'',
//         uemail:'',
//         uphone:'',
//         umessage:'',
//         index:'',
//       }
//     )

//   }

//   return (
//     <>
//     <div className="containre">

//     <form  onSubmit={onhandle}>
//     <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
//   <input type="text"  className="form-control" name='uname' value={formData.uname} onChange={Changer} />
// </div>
// <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
//   <input type="email" className="form-control"
//     placeholder="name@example.com" name='uemail'  value={formData.uemail} onChange={Changer} />
// </div>
// <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
//   <input type="text" className="form-control" name='uphone' value={formData.uphone} onChange={Changer}  />
// </div>
// <div className="mb-3">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
//   <textarea className="form-control"  rows="3" name='umessage' value={formData.umessage} onChange={Changer} ></textarea>
// </div>

// <button className='btn btn-primary'>{formData.index !== ''?'Upadate':'Save'}</button>
// </form>
// </div>

// <div className="container mt-4">
// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Phone</th>
//       <th scope="col">Message</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     {subData.map((Sub,index)=>(
// <tr key={index}>
// <td>{index+1}</td>
// <td>{Sub.uname}</td>
// <td>{Sub.uemail}</td>
// <td>{Sub.uphone}</td>
// <td>{Sub.umessage}</td>
// <td><button>Dlete</button>
// <button>Edit</button>
// </td>
// </tr>
//     ))}

//   </tbody>
// </table>
//       </div>


//     </>
//   )
// }

// export default App


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [formData, setFormData] = useState({
//     uname: '',
//     uemail: '',
//     uphone: '',
//     umessage: '',
//     index: ''
//   })

//   const [submissions, setSubmissions] = useState([])

//   const Changer = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const onhandle = (e) => {
//     e.preventDefault()
//     setSubmissions([...submissions, formData])
//     setFormData({
//       uname: '',
//       uemail: '',
//       uphone: '',
//       umessage: '',
//       index: '',
//     })
//   }

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={onhandle}>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
//             <input type="text" className="form-control" name='uname' value={formData.uname} onChange={Changer} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
//             <input type="email" className="form-control"
//               placeholder="name@example.com" name='uemail' value={formData.uemail} onChange={Changer} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
//             <input type="text" className="form-control" name='uphone' value={formData.uphone} onChange={Changer} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
//             <textarea className="form-control" rows="3" name='umessage' value={formData.umessage} onChange={Changer}></textarea>
//           </div>
//           <button className='btn btn-primary'>{formData.index !== '' ? 'Update' : 'Save'}</button>
//         </form>
//       </div>

//       <div className="container mt-4">
//         <h2>Submissions</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Message</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submissions.map((submission, index) => (
//               <tr key={index}>
//                 <td>{index +1}</td>
//                 <td>{submission.uname}</td>
//                 <td>{submission.uemail}</td>
//                 <td>{submission.uphone}</td>
//                 <td>{submission.umessage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  })

  const [submissions, setSubmissions] = useState([])
  const [error, setError] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const Changer = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onhandle = (e) => {
    e.preventDefault()

    // Validation logic
    if (!formData.uname || !formData.uemail || !formData.uphone || !formData.umessage) {
      setError('All fields are required')
      return
    }

    if (editIndex !== null) {
      const updatedSubmissions = submissions.map((submission, index) =>
        index === editIndex ? formData : submission
      )
      setSubmissions(updatedSubmissions)
      setEditIndex(null)
    } else {
      setSubmissions([...submissions, formData])
    }

    setFormData({
      uname: '',
      uemail: '',
      uphone: '',
      umessage: '',
      index: '',
    })
    setError('')
  }

const handleDelete =(index)=>{
  const dleteButton =submissions.filter((value,ind)=>ind !== index)
  setSubmissions(dleteButton)
}

  const handleEdit = (index) => {
    const submissionToEdit = submissions[index]
    setFormData(submissionToEdit)
    setEditIndex(index)
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onhandle}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" name='uname' value={formData.uname} onChange={Changer} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control"
              placeholder="name@example.com" name='uemail' value={formData.uemail} onChange={Changer} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
            <input type="text" className="form-control" name='uphone' value={formData.uphone} onChange={Changer} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" rows="3" name='umessage' value={formData.umessage} onChange={Changer}></textarea>
          </div>
          <button className='btn btn-primary'>{editIndex !== null ? 'Update' : 'Save'}</button>
        </form>
      </div>

      <div className="container mt-4">
        <h2>Submissions</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.uname}</td>
                <td>{submission.uemail}</td>
                <td>{submission.uphone}</td>
                <td>{submission.umessage}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
