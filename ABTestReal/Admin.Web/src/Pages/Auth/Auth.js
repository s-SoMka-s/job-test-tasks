import './Auth.scss'

import React from 'react'

import Input from '../../shared/components/Input/Input'
import Button from '../../shared/components/Button/Button'
import { Link } from 'react-router-dom'

export default function Auth() {
    return (
        <div className="auth-page">
            <div className="auth-page-wrapper">
                <h1>Wellcome to Dashboard!</h1>
                <h2>Please login to continue</h2>
                <Input
                    placeholder="email@example.com"
                    type="email"
                    fullWidth={true}
                ></Input>
                <Input
                    placeholder="password"
                    type="password"
                    fullWidth={true}
                ></Input>
                <Link to="/pages">
                    <Button>Sign in</Button>
                </Link>

                <p>
                    *If you don’t have credentials yet, contact the
                    administrator
                </p>
            </div>
        </div>
    )
}
