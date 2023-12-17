'use client'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

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
        <DropdownMenu aria-label='Profile Action' variant='flat'>
            <DropdownItem key="profile" className='h-14 gap-2'>
                <p></p>
                <p></p>
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileDropDown
