import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import bubbleImg from '../assets/posters/bubble.png'

const Cell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url(${bubbleImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const SubCell = styled.div`
  width: 100%;
  height: 100%;
`

const BubbleCell = ({ depth = 0, maxDepth = 5 }) => {
  const [popped, setPopped] = useState(false)

  if (popped && depth < maxDepth) {
    return (
      <Cell>
        {[0, 1, 2, 3].map((i) => (
          <SubCell key={i}>
            <BubbleCell depth={depth + 1} maxDepth={maxDepth} />
          </SubCell>
        ))}
      </Cell>
    )
  }

  return (
    <AnimatePresence>
      <Wrapper
        key="bubble"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 1.3, opacity: 0.6 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => depth < maxDepth && setPopped(true)}
      />
    </AnimatePresence>
  )
}

export default BubbleCell