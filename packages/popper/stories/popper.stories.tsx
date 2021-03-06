import { useDisclosure } from "@hackr/chakra-ui-hooks"
import { AnimatePresence, motion, Variants } from "framer-motion"
import * as React from "react"
import { usePopper } from "../src"

export default {
  title: "Popper",
}

export const Basic = () => {
  const { isOpen, onToggle } = useDisclosure()

  const {
    getReferenceProps,
    getPopperProps,
    getArrowWrapperProps,
    getArrowProps,
    transformOrigin,
  } = usePopper({
    placement: "bottom-start",
    matchWidth: true,
  })

  return (
    <>
      <button
        {...getReferenceProps({
          style: { margin: 400 },
          onClick: onToggle,
        })}
      >
        Reference Tooltip Trigger
      </button>

      {isOpen && (
        <div
          {...getPopperProps({
            style: {
              width: 250,
              background: "red",
              padding: 15,
              borderRadius: 6,
              transformOrigin,
            },
          })}
        >
          Popper
          <div {...getArrowWrapperProps()}>
            <div {...getArrowProps({ style: { background: "red" } })} />
          </div>
        </div>
      )}
    </>
  )
}

export const WithTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  const {
    getPopperProps,
    getReferenceProps,
    getArrowWrapperProps,
    getArrowProps,
    transformOrigin,
  } = usePopper({
    placement: "bottom-start",
  })

  const slide: Variants = {
    exit: { y: -2, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  }

  const bg = "red"

  return (
    <>
      <button
        {...getReferenceProps({
          onClick: onToggle,
        })}
      >
        Toggle
      </button>
      <div {...getPopperProps()}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              transition={{
                duration: 0.15,
                easings: "easeInOut",
              }}
              variants={slide}
              initial="exit"
              animate="enter"
              exit="exit"
              style={{
                background: bg,
                width: 200,
                padding: transformOrigin,
                borderRadius: 4,
              }}
            >
              Testing
              <div {...getArrowWrapperProps()}>
                <div {...getArrowProps({ style: { background: bg } })} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
