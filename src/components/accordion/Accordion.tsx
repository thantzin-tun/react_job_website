import React, { FC, useState } from 'react'
import { AccorBody, AccorHeader, AccorItem, Accordion } from 'theme/accordion'
import { TextCom } from 'components'
import { Link } from 'react-router-dom'

type AccordionProps = {
  children?: React.ReactNode,
  data?: any

}

export const AccordionCom: FC<AccordionProps> = ({ children, data }) => {
  const [open, setOpen] = useState<number>(-1);

  const toggleItem = (index: number) => {
    if (open === index) {
      setOpen(-1);
      return
    }
    setOpen(index);
  }

  return (
    <>
      <Accordion>
        {
          children
            ?
            children
            :
            data?.map((item: any, index: number) => {
              return (
                <AccorItem key={index} className="mb-4">
                  <AccorHeader onClick={() => toggleItem(index)} padding="5" borderColor="#aeaeae" borderBottom="1">
                    <TextCom fontSize="md" fontWeight="xl">
                      {item?.title}
                    </TextCom>
                  </AccorHeader>
                  <AccorBody active={`${open === index ? "show" : "hide"}`}>
                    {
                      item?.items.length > 0 &&
                      item.items.map((item: any, index: number) => {
                        return (
                          item?.link
                            ?
                            <div className="footer-list d-flex flex-column mt-1">
                              <Link to={item?.link} className="link">
                                <TextCom fontSize="13" className="hover">{item.name}</TextCom>
                              </Link>
                            </div>
                            :
                            <TextCom>
                              {item?.name}
                            </TextCom>
                        )
                      })
                    }
                  </AccorBody>
                </AccorItem>
              )
            })
        }
      </Accordion>
    </>
  )
}