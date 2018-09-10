import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'DSLR Cameras', link: true },
  { key: 'Shirt', content: 'Canon E0S 70D', active: true },
]

const Breadcrumbs = () => <div style={{paddingLeft:'100px'}}><Breadcrumb icon='right angle' sections={sections} /></div>

export default Breadcrumbs