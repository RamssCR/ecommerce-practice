import { render, screen } from '@testing-library/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { describe, expect, test } from 'vitest'
import { services } from '@utils/serviceMap'

const IconsMap = () => (
    <div>
        {services.map((service, index) => (
            <div key={index} data-testid={`service-${index}`}>
                <FontAwesomeIcon icon={service.icon} />
                <h2>{service.perk}</h2>
                <p>{service.description}</p>
            </div>
        ))}
    </div>
)

describe('IconsMap', () => {
    test('renders all services with correct icons', () => {
        render(<IconsMap />)

        services.forEach((service, index) => {
            const serviceElement = screen.getByTestId(`service-${index}`)
            expect(serviceElement).toBeDefined()
            expect(serviceElement.querySelector('h2')?.textContent).toBe(service.perk)
            expect(serviceElement.querySelector('p')?.textContent).toBe(service.description)
        })
    })
})