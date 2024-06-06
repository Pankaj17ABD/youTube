import React, { Suspense } from 'react'
import { ButtonList } from './ButtonList'
import { VedioContainer } from './VedioContainer'
import { Loading } from './Loading'

export const MainContainer = () => {
    return (
        <div className=' col-span-11'>
           
            <ButtonList />
            <Suspense fallback={<Loading />}>
            <VedioContainer />
            </Suspense>
        </div>
    )
}
