"use client"
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"
import { useState } from "react"
import {CgProfile} from "react-icon"

const ProfileDropDown = () => {
	const [signedIn, setsignedIn] = useState(false)

	return <div className='flex items-center gap-4'>{signedIn ? (<Dropdown placement='bottom-end'>
    <DropdownTrigger>
        <Avatar
            as='button'
            className='transition-transform'
            src='https://avatars.githubusercontent.com/u/87035691?v=4'
        />
    </DropdownTrigger>
    <DropdownMenu
        aria-label='Profile Action'
        variant='flat'
    >
        <DropdownItem
            key='profile'
            className='h-14 gap-2'
        >
            <p className='font-semibold'>Signed in as</p>
            <p className='font-semibold'>zuromr@gmail.com</p>
        </DropdownItem>
        <DropdownItem key='setting'>My Profile</DropdownItem>
        <DropdownItem key='My Plan'>My Plan</DropdownItem>
        <DropdownItem
            key='logout'
            color='danger'
        >
            Log Out
        </DropdownItem>
    </DropdownMenu>
</Dropdown>): (
    <CgProfile />
)}</div>
}

export default ProfileDropDown
