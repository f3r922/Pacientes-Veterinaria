import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "../types";

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (date: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (date: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return{
        ...patient,
        id:  uuidv4()
    }
}

export const usePatienteStore = create<PatientState>()(
    devtools(
        persist((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients:[...state.patients, newPatient]
            }))
        },
        deletePatient:(id) => {
            set((state) => ({
                patients: state.patients.filter( patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => patient.id === state.activeId ? {...data, id: state.activeId } : patient ),
                activeId:''
            }))
        }
    }),{
        name:'patient-storage'
        //por si queremos alamacenar en la session
        //storage: createJSONStorage(() => sessionStorage)
    })
))

