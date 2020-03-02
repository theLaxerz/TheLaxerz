import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

function SidebarItem({ label, items, depthStep = 15, depth = 0, ...rest }) {
    return (
      <>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <span><b>{label}</b></span>
          </ListItemText>
        </ListItem>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </>
    )
  }
  
  function Sidebar({ items, depthStep, depth }) {
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    )
  }

export default Sidebar