'use client'
import { Dropdown, DropdownTrigger } from '@nextui-org/react'

const ProfileDropDown = () => {
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
            <Avatar
            
            >
        </DropdownTrigger>
      </Dropdown>
    </div>
  )
}

export default ProfileDropDown
