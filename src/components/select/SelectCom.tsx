import React,{FC, useState} from 'react'
import { Select,MainSelect ,OptionBox} from 'theme'

type SelectComProps = {
    children: React.ReactNode,
    title: string
}

export const SelectCom:FC<SelectComProps> = ({children,title}) => {

  const [bol,setBol] = useState(false);

  return (
    <>
      <MainSelect className='bg-primary'>
        <Select onClick={()=> setBol(!bol)}>{title}</Select>
        {
          bol
          ?
        <OptionBox>
          {children}
        </OptionBox>
          :
          ""
        }
      </MainSelect>
    </>
  )
}