import React, { useState } from 'react'

function AdminPage() {

    const [addStudent,setAddStudent] = useState(false)
    const [students,setStudents] = useState(() => {
        const savedStudents = localStorage.getItem("students")
        return savedStudents ? JSON.parse(savedStudents) : []
    })
    const [edit,setEdit] = useState(false)
    const [editIndex,setEditIndex] = useState(null)

    const handleAdd = () => {
        setAddStudent(!addStudent)
        setEdit(false)
    }

    const updateStudent = (newStudent) => {
        if (editIndex !== null) {
            const updatedStudents = students.map((student, index) =>
                index === editIndex ? newStudent : student
            );
            setStudents(updatedStudents);
            setEditIndex(null);
            localStorage.setItem("students", JSON.stringify(updatedStudents));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newStudent = {
            name:e.target.name.value,
            lastName:e.target.lastName.value,
            age:e.target.age.value,
            group:e.target.group.value,
            id:e.target.id.value
        }

        const updatedStudents = [...students,newStudent]
        setStudents(updatedStudents)
        e.target.reset()
        localStorage.setItem("students",JSON.stringify(updatedStudents))
    }

    const handleRemove = (id) => {
        const filtered = students.filter(student => student.id !== id)
        setStudents(filtered)
        localStorage.setItem("students",JSON.stringify(filtered))
        
    }

    const handleEdit = (index) => {
        setEdit(true)
        setEditIndex(index)
        setAddStudent(false)

    }


    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        const updatedStudent = {
            name: e.target.name2.value,
            lastName: e.target.lastName2.value,
            age: e.target.age2.value,
            group: e.target.group2.value,
            id: students[editIndex].id // უცვლელი ID
        }
        updateStudent(updatedStudent)
    }

   

  return (
    <div>
        <button onClick={handleAdd}>Add student</button>

        {addStudent ? (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='name'/>
                    <input type="text" name="lastName" placeholder='lastname' />
                    <input type="number" name="age" placeholder='age' />
                    <input type="number" name="group" placeholder='group' />
                    <input type="number" name="id" placeholder='id'/>
                    <button type='submit'>submit</button>
                </form>

            </div>
        ) : null}

        {students.length > 0 && (
            <div>
                {students.map((item,index) => (
                    <div>
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.lastName}</p>
                            <p>{item.age}</p>
                            <p>{item.group}</p>
                            <p>{item.id}</p>
                            <button onClick={() => handleEdit(index)}>edit</button>
                            <button onClick={() => handleRemove(item.id)}>remove</button>
                            {edit && (
                                <div>
                                    <form onSubmit={handleUpdateSubmit}>
                                        <input type="text" name="name2" placeholder='name'/>
                                        <input type="text" name="lastName2" placeholder='lastname' />
                                        <input type="number" name="age2" placeholder='age' />
                                        <input type="number" name="group2" placeholder='group' />
                                        <input type="number" name="id2" placeholder='id'/>
                                        <button type='submit'>update</button>
                                    </form>
                    
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default AdminPage