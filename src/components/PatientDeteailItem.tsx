
type PatientDeteailItemProps = {
    label:string
    data: string
}

export const PatientDeteailItem = ({ label, data } : PatientDeteailItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
