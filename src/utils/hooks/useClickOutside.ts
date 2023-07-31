import { useEffect, MutableRefObject } from 'react'

export default function useClickOutside(
  ref: MutableRefObject<HTMLDivElement | null>,
  toggleModal: (value: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const { body } = document
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        toggleModal(false)
        body.style.overflow = 'unset'
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
}