import { PropsWithChildren, createContext, useContext, useState } from "react";

const ThemeCtx = createContext([true, ()=>{}] as [boolean, (p: boolean)=>void])

export function useSetTheme() {
  const [c, s] = useContext(ThemeCtx)
  return  ()=>{s(!c)}
}

export default function Ctx({children}: PropsWithChildren) {
  const [t, setT] = useState(true)
  return <ThemeCtx.Provider value={[t, setT]}>
    {children}
  </ThemeCtx.Provider>
}
