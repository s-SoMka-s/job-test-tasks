import React from 'react'

import Input from '../../shared/components/Input/Input'

export default function ComponentPreview() {
    return (
        <div>
            <Input
                type="text"
                placeholder="dd.mm.yyyy"
                mask="99.99.9999"
            ></Input>
        </div>
    )
}
