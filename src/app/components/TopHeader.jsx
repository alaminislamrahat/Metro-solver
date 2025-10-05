import React from 'react'

const TopHeader = () => {
    const list = ["budgetFriendly", "No.1 in Europe", "On your first order", "30% Off", "For all products buy now get the offer", "UserFriendly", "24/7 service"]
  return (
    <div className=' bg-white/10 hidden lg:block'>
        <div className='flex gap-5 text-center justify-between text-white  py-5 container mx-auto'>
        {
            list.map((item, idx)=> (
               <div key={idx}>
                 <p className={`${item === "30% Off" && "btn btn-sm bg-gradient-to-r from-red-500 to-orange-400 rounded-3xl px-5 text-white border-none"}`} >
                    {item}
                </p>
              
               </div>
                
            ))
        }
    </div>
    </div>
  )
}

export default TopHeader