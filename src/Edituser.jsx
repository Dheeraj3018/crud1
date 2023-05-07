import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './App.css'

function Edituser() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: "",
            startdate: "",
            salarey: ""
        },
        validate: (values) => {
            let errors = {}
            if (values.name === "") {
                errors.name = "Please enter name"
            }
            if (values.position === "") {
                errors.position = "Please enter position"
            }
            if (values.office === "") {
                errors.office = "Please enter office"
            }
            if (values.age === "") {
                errors.age = "Please enter age"
            }
            if (values.startdate === "") {
                errors.startdate = "Please enter startdate"
            }
            if (values.salarey === "") {
                errors.salarey = "Please enter salarey"
            }
            return errors
        },
        onSubmit: async (values) => {
            let user = await axios.put(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/users/${params.id}`, values)
            alert("User Updated")
            navigate ("/Portal/Users")
        }
    });

    useEffect(() => {
      loadUser ()
    }, [])

    let loadUser = async () => {
        try {
           let user = await axios.get(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/users/${params.id}`)
           formik.setValues ({
            name: user.data.name,
            position: user.data.position,
            office: user.data.office,
            age: user.data.age,
            startdate: user.data.startdate,
            salarey: user.data.salarey
           })
        }catch (error){

        }
    }
    
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-8">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Edit an Account!</h1>
                                </div>
                                <form className="user" onSubmit={formik.handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label style={{ color: "black" }}>Name</label>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.name ? `input-error` :``}`}
                                                placeholder="Name" value={formik.values.name} onChange={formik.handleChange} name="name" />
                                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Position</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.position ? `input-error` :``}`}
                                                placeholder="Position" value={formik.values.position} onChange={formik.handleChange} name="position" />
                                            <span style={{ color: "red" }}>{formik.errors.position}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Office</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.office ? `input-error` :``}`}
                                                placeholder="Office" value={formik.values.office} onChange={formik.handleChange} name="office" />
                                            <span style={{ color: "red" }}>{formik.errors.office}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Age</lable>
                                            <input type="number" className="form-control form-control-user" id={`${formik.errors.age ? `input-error` :``}`}
                                                placeholder="Age" value={formik.values.age} onChange={formik.handleChange} name="age" />
                                            <span style={{ color: "red" }}>{formik.errors.age}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Start Date</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.startdate ? `input-error` :``}`}
                                                placeholder="Start Date" value={formik.values.startdate} onChange={formik.handleChange} name="startdate" />
                                            <span style={{ color: "red" }}>{formik.errors.startdate}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Salarey</lable>
                                            <input type="number" className="form-control form-control-user" id={`${formik.errors.salarey ? `input-error` :``}`}
                                                placeholder="Salarey" value={formik.values.salarey} onChange={formik.handleChange} name="salarey" />
                                            <span style={{ color: "red" }}>{formik.errors.salarey}</span>
                                        </div>
                                    </div>
                                    <input className="btn btn-primary btn-user btn-block" type={"submit"} value="Register Account" disabled={!formik.isValid} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edituser