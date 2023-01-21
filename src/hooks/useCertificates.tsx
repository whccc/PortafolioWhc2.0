import { collection, getDocs } from '@firebase/firestore'
import { useState } from 'react'
import db from '../firebase/firebaseConfig'

const useCertificates = () => {
    const [JsonCertificates, setJsonCertificates] = useState([])

    const GetHookCertificates = async () => {
        try {
            const DataJson = []
            const Data = await getDocs(collection(db, 'Certificates'))
            Data.forEach(DataItem => {
                DataJson.push(DataItem.data())
            })
            setJsonCertificates(DataJson)
        } catch (Error) {
            console.error('Server Error')
        }
    }

    return { JsonCertificates, GetHookCertificates }
}

export default useCertificates
