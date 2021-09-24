import './Auth.scss'

import React from 'react'

import Input from '../../shared/components/Input/Input'
import Button from '../../shared/components/Button/Button'

export default function Auth() {
    return (
        <div className="auth-page">
            <div className="auth-page-wrapper">
                <h1>Wellcome to Dashboard!</h1>
                <h2>Please login to continue</h2>
                <Input placeholder="email@example.com" type="email"></Input>
                <Input placeholder="password" type="password"></Input>
                <Button text="Sign in"></Button>
                <p>
                    *If you don’t have credentials yet, contact the
                    administrator
                </p>
            </div>
        </div>
    )
}
