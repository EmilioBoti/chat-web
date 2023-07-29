import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { FormLogin } from "../../components/auth/Form"
import { Home } from "../../components/home/Home"


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<FormLogin />} />
        <Route path="*" element={<FormLogin />} />
      </Routes>
    </BrowserRouter>
  )
}
