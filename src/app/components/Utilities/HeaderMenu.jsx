import React from 'react'

const HeaderMenu = ({title}) => {
  return (
    <div>
      <div className="flex items-center justify-center p-8">
        <h3 className="text-2xl text-color-primary">
          {title}
        </h3>
      </div>

    </div>
  )
}

export default HeaderMenu