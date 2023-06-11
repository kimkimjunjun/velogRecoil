import React, { children } from 'react'

function BasePost({children}) {
    return (
        <div className='flex mt-5'>
            <main className='flex-1'>
                <div className='flex flex-wrap justify-space ml-[4%]'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default BasePost;