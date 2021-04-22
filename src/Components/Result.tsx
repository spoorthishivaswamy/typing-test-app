import React, { memo } from 'react'
import State from './State'

interface Props {
  completedText: string
  inputText: string
  errorIndex: number
  accuracy: number
  wpm: number
  showStats: boolean
  handleReload: () => void
}

function Result({
  completedText = '',
  inputText = '',
  errorIndex = 0,
  accuracy = 0,
  wpm = 0,
  showStats = false,
  handleReload,
}: Props) {
  return (
    <React.Fragment>
      <div className='result'>
        <div className='bg-success text-white font-weight-bold p-2'>Result</div>
        <div className='d-flex text-center justify-content-around align-items-center py-5 state'>
          <State title='WPM' value={wpm || 0} />
          <State title='Errors' value={errorIndex || 0} />
          <State title='Accuracy' value={accuracy || 0} symbol='%' />
          <State
            title='Completed'
            value={((completedText.length / inputText.length) * 100).toFixed(0) + '%' || '0%'}
            symbol='%'
          />
        </div>
      </div>
    

    </React.Fragment>
  )
}

export default memo(Result)
