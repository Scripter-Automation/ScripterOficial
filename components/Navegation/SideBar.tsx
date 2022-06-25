import React from 'react'
import {CostumList, ListItem, Option } from "../reciclables/Lists"
import { ChatAltIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/solid'
import { CollectionIcon } from '@heroicons/react/outline'

export default function SideBar() {
  return (
    <div className='absolute bg-gray-100 border-2 w-full sm:w-1/3 lg:w-1/4 md:1/3  h-full'>
    <CostumList
        className=''
    >
        <ListItem
            className='sidebarButton'
            Hover={false}
            Icon={<ShoppingBagIcon className='icon text-blue-500'/>}
        >
        MarketPlace
        </ListItem>
        <ListItem
            className='sidebarButton'
            Hover={false}
            variant="select"
            Icon={<UserGroupIcon className='icon text-blue-500'/>}
            options={
                <>
                <a href='/Social'>
                <Option icon={<CollectionIcon className='icon text-blue-500 text-xs'></CollectionIcon>}>Feed</Option>
                </a>
                <Option icon={<ChatAltIcon className='icon text-blue-500'/>}>Inbox</Option>
                </>
            }
        >
        Social
        </ListItem>
    </CostumList>
    
  </div> 
  )
}
