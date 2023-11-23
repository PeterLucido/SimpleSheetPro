// 'use client'

// import React from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
// // import { experimental_useFormStatus as useFormStatus } from 'react-dom'

// // import logout from '../_functions/logout'

// function LogoutButton () {
//   // const { pending } = useFormStatus()
//   return (
//     // <button type="submit" className='w-full h-full'>{pending ? 'One moment...' : 'Logout'}</button>
//   )
// }

// function UserDropdown () {
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button
//           aria-label="Options">
//           <div className='flex items-center hover:border rounded p-2 box-border'>
//             <div className='text-right mr-2'>
//               {/* <div className='font-bold text-sm text-gray-700 mb-[-4px]'>{userData.businessLegalName}</div>
//               <div className='text-xs text-gray-400'>{userData.owner ? userData.email : userData.primaryContactEmail}</div>
//               <div className='text-xs text-gray-300'>{userData.owner ? 'Owner' : 'Primary Contact'}</div> */}
//             </div>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//             </svg>
//           </div>
//         </button>
//       </DropdownMenu.Trigger>

//       <DropdownMenu.Portal>
//         <DropdownMenu.Content
//           className="min-w-[220px] bg-white rounded-md py-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
//           sideOffset={5}>
//           <div className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
//             {/* <form action={logout} className='text-sm text-gray-700 hover:text-gray-900 font-medium cursor-pointer w-full hover:bg-gray-50'>
//               <LogoutButton /> */}
//             {/* </form> */}
//           </div>
//           <DropdownMenu.Arrow className="fill-white" />
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   )
// }

// export default UserDropdown
