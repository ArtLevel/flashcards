import { Button } from '@/components/ui/button'
import { LeaveSvg } from '@/components/ui/utils/leaveSvg'

export function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Button as={'a'} href={'/link'} variant={'primary'}>
          Link Button Button
        </Button>
        <Button variant={'primary'}>Hello Button</Button>
        <Button disabled variant={'primary'}>
          Hello Button
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button variant={'primary'}>
          <LeaveSvg /> Hello ButtonHello Button
        </Button>
        <Button disabled variant={'primary'}>
          <LeaveSvg /> Hello ButtonHello Button
        </Button>
      </div>

      <div style={{ display: 'flex' }}>
        <Button variant={'secondary'}>
          <LeaveSvg />
          Secondary
        </Button>
        <Button disabled variant={'secondary'}>
          Secondary Disabled
        </Button>
        <Button as={'a'} href={'/link'} variant={'secondary'}>
          Secondary
        </Button>
      </div>
    </>
  )
}
