import React from 'react'
import { useLocalization } from './24.localizationContext'

function TransalationAppUseContext() {
    const {setLocal, local, translate} = useLocalization()
    console.log(local)
    const handleLocalChange = (newLocal) =>{
        setLocal(newLocal)
    }
  return (
    <div>
        <h1>Transalation App Using Use Context</h1>
        <h2>{translate('greeting')}</h2>
        <h2>{translate('welcome')}</h2>
        <button onClick={()=> handleLocalChange('en')}>English</button>
        <button onClick={()=> handleLocalChange('es')}>Espanol</button>
    </div>

  )
}

export default TransalationAppUseContext