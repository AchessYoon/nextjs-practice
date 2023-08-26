'use client'

import { createContext, useContext, useEffect, useState } from 'react'


const ThemeCtx = createContext([true, ()=>{}] as [boolean, ()=>void])

function Sseki(
  {onClick}:{onClick: any}
) {
  // const  tctx = useContext(ThemeCtx)
  const [theme, setTheme] = useContext(ThemeCtx)
  return <div onClick={setTheme}> ~{theme ? 0 : 1}~ </div>
}

export default function Counter() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState(true)

  useEffect(()=>{
    const f = () => {
      console.log(count)
    }
    window.addEventListener("scroll", f)
    return ()=>{
      window.removeEventListener("scroll", f)
    }
  }, [count])

  function chTheme() {
    setTheme(!theme)
  }

  return (
    <div>
      <ThemeCtx.Provider value={[theme, chTheme] as [boolean, ()=>void]}>
        <p>You clicked {count} times, theme: {theme ? 0 : 1} <Sseki onClick={/*chTheme*/()=>{}} /> </p>
      </ThemeCtx.Provider>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
