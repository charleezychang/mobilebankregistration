const useDebounce = (cb) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, 1500)
    }

}

export default useDebounce