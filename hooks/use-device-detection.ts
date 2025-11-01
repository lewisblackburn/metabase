import { useEffect, useState } from 'react'

export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024
export const DESKTOP_BREAKPOINT = 1200

type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useDeviceDetection() {
    const [device, setDevice] = useState<DeviceType>('desktop')

    useEffect(() => {
        const updateDevice = () => {
            const width = window.innerWidth

            if (width < MOBILE_BREAKPOINT) {
                setDevice('mobile')
            } else if (width < TABLET_BREAKPOINT) {
                setDevice('tablet')
            } else {
                setDevice('desktop')
            }
        }

        // Set initial device type
        updateDevice()

        // Listen for resize events
        window.addEventListener('resize', updateDevice)

        return () => window.removeEventListener('resize', updateDevice)
    }, [])

    return { device }
}
