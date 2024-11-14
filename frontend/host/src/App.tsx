import React, { lazy, Suspense }  from "react";
import ReactDOM from 'react-dom/client'

import './index.css'

const AuthLogin = lazy(() => import('auth/Login').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 ); 

const AuthRegister = lazy(() => import('auth/Register').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 ); 

const GalleryImagePopup = lazy(() => import('gallery/ImagePopup').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 ); 

const ProfilePopupWithForm = lazy(() => import('profile/PopupWithForm').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 ); 

const App = () => (
  <div className="container">
    <Suspense> 
        <ProfilePopupWithForm />
    </Suspense>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)