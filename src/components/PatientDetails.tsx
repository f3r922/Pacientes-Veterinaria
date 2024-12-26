import { toast } from "react-toastify"
import { usePatienteStore } from "../store/store"
import { Patient } from "../types"
import { PatientDeteailItem } from "./PatientDeteailItem"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient } : PatientDetailsProps) => {

    const deletePatient = usePatienteStore(state => state.deletePatient)
    const getPatientById = usePatienteStore(state => state.getPatientById)

    const handleClickDelete = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado', {
            type: 'error'
        })
    }
    
  return (

    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        
        <PatientDeteailItem 
            label="ID"
            data={patient.id}
        />
        <PatientDeteailItem 
            label="Nombre"
            data={patient.name}
        />
        <PatientDeteailItem 
            label="Propietario"
            data={patient.caretaker}
        />
        <PatientDeteailItem 
            label="Email"
            data={patient.email}
        />
        <PatientDeteailItem 
            label="Fecha Alta"
            data={patient.date.toString()}
        />
        <PatientDeteailItem 
            label="Simtomas"
            data={patient.symptoms}
        />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={ () => getPatientById(patient.id) }
            >
                Editar
            </button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleClickDelete}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
