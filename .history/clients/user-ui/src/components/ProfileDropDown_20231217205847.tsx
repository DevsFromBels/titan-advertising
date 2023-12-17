'use client'
import { Avatar, Dropdown, DropdownTrigger } from '@nextui-org/react'

const ProfileDropDown = () => {
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
            <Avatar
                as = "button"
                className="transition-transform"
                src="https://avatars.githubusercontent.com/u/87035691?v=4"
            >
        </DropdownTrigger>
      </Dropdown>
    </div>
  )
}

export default ProfileDropDown
