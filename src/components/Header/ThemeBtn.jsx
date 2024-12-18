import React from 'react'
import './ThemeBtn.css'
function ThemeBtn() {
    const switchTheme=(e)={
        if(e.target.checked){
            document.querySelector('body').setAttribute('')
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default ThemeBtn
