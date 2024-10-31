import { useEffect, useState } from "react"

export const useInfinityScroll = (options) => {
    const [lastItem, setLastItem] = useState(null)
    const [isVisible, setIsVisible] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const callback = (entries) => {
        const isIntersecting = entries[0].isIntersecting

        if (isIntersecting) {
            setIsLoading(true)
            setTimeout(() => {
                setIsVisible(true)
            }, 300)
        }
    }

    useEffect(() => {
        const lastItemSeted = !!lastItem

        const observer = new IntersectionObserver(callback, options)
        if (lastItemSeted) observer.observe(lastItem)

        return () => {
            if(lastItemSeted) observer.unobserve(lastItem)
        }
    }, [lastItem])

    return [setLastItem, isVisible, setIsVisible, isLoading, setIsLoading]
}
