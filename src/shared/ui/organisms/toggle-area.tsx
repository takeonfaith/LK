import React from 'react'
import SwitchToggle from '../molecules/switch-toggle'

export interface ToggleItem {
	title: string
	state: boolean | false
	action?: (state: boolean) => void
}

interface Props {
	title: string
	toggles: ToggleItem[]
	onChange: (id: number) => void
}

const ToggleArea = ({ toggles, onChange }: Props) => {

	return (
		<>
			{toggles.map(({ title, state, action }, i) => {
				return <SwitchToggle
					id={i}
					isToggled={state}
					setIsToggled={() => { onChange(i); action && action(!state) }}
					key={i}
				/>
			})}
		</>
	)
}

export default ToggleArea
